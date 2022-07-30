import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';
import { catchError, map, switchMap, startWith } from 'rxjs/operators';
import { Pagination } from 'src/app/models/pagination.model';
import { TableFilter } from 'src/app/helpers/table.util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import HttpUtils from 'src/app/helpers/http.util';
import Utils from 'src/app/helpers/utils';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { SuccsessModalComponent } from '../../helpers/modals/modals.component';
import { CompaniesComponent } from '../companies/companies.component';
import { Company } from 'src/app/models/company.model';
import { environment } from 'src/environments/environment';
import { BranchOffice } from 'src/app/models/branch-office.model';
import { BranchOfficeService } from 'src/app/services/branch-office.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  @Input() isModal: boolean = false;
  @ViewChild(MatPaginator, {static: false}) paginator: any;
  @ViewChild(MatSort, {static: false}) sort: any;

  displayedColumns: string[] = ['first_name', 'branch_office', 'nick', 'role', 'state_name', 'actions'];
  resultsLength = 0;
  isLoadingResults = true;
  tableFilter: TableFilter;
  users: User[] = [];

  constructor(
    private userService: UserService,
    private ngbModal: NgbModal,
    public activeModal: NgbActiveModal
  ) {
    this.tableFilter = new TableFilter();
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.firstPage()));
    this.tableFilter.startWith(this.sort, this.paginator);

    merge(this.sort.sortChange, this.paginator.page, this.tableFilter.filter.search)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;

          return this.userService.getAll(this.tableFilter.params())
            .pipe(
              catchError(HttpUtils.paginationCatchError)
            );
        }),
        map((response: Pagination) => {
          this.isLoadingResults = false;
          this.resultsLength = response.data.total;

          return response.data.items;
        }),
      )
      .subscribe(data => (this.users = data));
  }

  createOrEdit(user?: User) {
    const modalRef = this.ngbModal.open(UsersStoreOrUpdateComponent, this.isModal ? Utils.modalIndex3 : {});

    if (user) {
      modalRef.componentInstance.user = Object.assign({}, user);
    }

    modalRef.result
      .then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }

  add(user: User) {
    this.activeModal.close(user)
  }
}

@Component({
  selector: 'app-card-warn',
  template: `
    <spinner *ngIf="isLoadingResults"></spinner>
    <div class="card m-0">
      <div class="card-header bg-light">
        <h4 class="card-title">
          <span *ngIf="!user.id">Creación de nuevo</span>
          <span *ngIf="user.id">Edición de </span>
          usuario
        </h4>
        <span class="btn-close-2" (click)="activeModal.dismiss()"></span>
      </div>
      <div class="card-body">
        <div class="form-body">
          <div class="row" *ngIf="isSuper">
            <div class="col-12">
              <div class="mb-3">
                <label>Empresa <span class="text-sm font-medium text-muted pointer ml-15" (click)="searchCompany()">Cambiar</span></label>
                <label class="d-block">{{ user.company?.name }}</label>
                <label class="d-block text-secondary" *ngIf="!user.company">-</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label for="name">Sucursal</label>
                <select name="branch-office" class="form-control" [(ngModel)]="user.branch_office_id">
                  <option [ngValue]="null" selected="true" disabled>Seleccione la sucursal</option>
                  <option *ngFor="let branchOffice of branchOffices" [ngValue]="branchOffice.id">
                    {{ branchOffice.company ? ('[' + branchOffice.company.name + ']') : '' }} {{ branchOffice.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-5">
              <div class="mb-3">
                <label for="name">Nick</label>
                <input type="text" name="nick" class="form-control" placeholder="Nick" [(ngModel)]="user.nick">
              </div>
            </div>
            <div class="col-7">
              <div class="mb-3">
                <label for="name">Contraseña</label>
                <input type="password" name="password" class="form-control" placeholder="Contraseña" [(ngModel)]="user.password">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-5">
              <div class="mb-3">
                <div class="mb-3"><label class="control-label">Estado</label>
                  <div class="form-check">
                    <input type="radio" id="user-active" name="user-state" class="form-check-input" [value]="1" [(ngModel)]="user.state">
                    <label for="user-active" class="form-check-label">Activo</label>
                  </div>
                  <div class="form-check">
                    <input type="radio" id="user-inactive" name="user-state" class="form-check-input" [value]="0" [(ngModel)]="user.state">
                    <label for="user-inactive" class="form-check-label">Inactivo</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-7">
              <div class="mb-3">
                <div class="mb-3"><label class="control-label">Rol</label>
                  <div class="form-check">
                    <input type="radio" id="user-role-admin" name="user-role" class="form-check-input" [value]="2" [(ngModel)]="user.role">
                    <label for="user-role-admin" class="form-check-label">Administrador</label>
                  </div>
                  <div class="form-check">
                    <input type="radio" id="user-role-user" name="user-role" class="form-check-input" [value]="3" [(ngModel)]="user.role">
                    <label for="user-role-user" class="form-check-label">Usuario</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <span class="text-sm font-medium text-muted pointer" (click)="showOtherFields = true" *ngIf="!showOtherFields">Mostrar más<i class="fa fa-downfa fa-angle-down ml-10"></i></span>
                <span class="text-sm font-medium text-muted pointer" (click)="showOtherFields = false" *ngIf="showOtherFields">Mostrar menos<i class="fa fa-downfa fa-angle-up ml-10"></i></span>
              </div>
            </div>
          </div>
          <div class="row" *ngIf="showOtherFields">
            <div class="col-12">
              <div class="mb-3">
                <label for="name">Nombre</label>
                <input type="text" name="first_name" class="form-control" placeholder="Nombre" [(ngModel)]="user.first_name">
              </div>
            </div>
          </div>
          <div class="row" *ngIf="showOtherFields">
            <div class="col-12">
              <div class="mb-3">
                <label for="name">Apelidos</label>
                <input type="text" name="last_name" class="form-control" placeholder="Apellidos" [(ngModel)]="user.last_name">
              </div>
            </div>
          </div>
          <div class="row" *ngIf="showOtherFields">
            <div class="col-5">
              <div class="mb-3">
                <label for="name">DNI</label>
                <input type="text" name="dni" class="form-control" placeholder="DNI" [(ngModel)]="user.dni">
              </div>
            </div>
            <div class="col-7">
              <div class="mb-3">
                <label for="name">Teléfono</label>
                <input type="text" name="phone" class="form-control" placeholder="Teléfono" [(ngModel)]="user.phone">
              </div>
            </div>
          </div>
          <div class="row" *ngIf="showOtherFields">
            <div class="col-12">
              <div class="mb-3">
                <label for="name">Correo</label>
                <input type="text" name="email" class="form-control" placeholder="Correo" [(ngModel)]="user.email">
              </div>
            </div>
          </div>
          <div class="row" *ngIf="showOtherFields">
            <div class="col-12">
              <div class="mb-3">
                <label for="name">Dirección</label>
                <input type="text" name="address" class="form-control" placeholder="Dirección" [(ngModel)]="user.address">
              </div>
            </div>
          </div>
          <hr>
          <span class="btn btn-info" (click)="save()">Guardar</span>
        </div>
      </div>
    </div>
  `
})
export class UsersStoreOrUpdateComponent implements OnInit {
  @Input() user: User = {
    role: 3,
    state: 1,
  };
  branchOffices: BranchOffice[] = []

  isLoadingResults: boolean = false;
  showOtherFields: boolean = false;
  isSuper = environment.isSuper;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService,
    private userServiceService: BranchOfficeService,
    private ngbModal: NgbModal
  ) {}

  getUser(id: number) {
    this.userServiceService.getAll(new TableFilter().params())
      .subscribe(response => {
        this.branchOffices = response.data.items;
      });

    this.userService.get(id)
      .subscribe(response => {
        this.user = response.data;
      });
  }

  save() {
    this.isLoadingResults = true;
    const service = !this.user.id ? this.userService.store(this.user) : this.userService.update(this.user);

    service
      .subscribe(response => {
        const modalRef  = this.ngbModal.open(SuccsessModalComponent, { centered: true });
        modalRef.componentInstance.message = response.message;

        this.isLoadingResults = true;

        this.activeModal.close();
      }, () =>  this.isLoadingResults = false);
  }

  searchCompany() {
    const modalRef  = this.ngbModal.open(CompaniesComponent, { size: 'xl', backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' });
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((company: Company) => {
      this.user.company = company;
      this.user.company_id = company.id;
    }, Utils.none);
  }

  ngOnInit(): void {
    if (this.user.id) {
      this.getUser(this.user.id);
    }
  }
}
