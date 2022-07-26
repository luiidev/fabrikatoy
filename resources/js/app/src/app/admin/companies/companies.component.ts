import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, OperatorFunction } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, startWith } from 'rxjs/operators';
import { Pagination } from 'src/app/models/pagination.model';
import { TableFilter } from 'src/app/helpers/table.util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import HttpUtils from 'src/app/helpers/http.util';
import Utils from 'src/app/helpers/utils';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { SuccsessModalComponent } from '../modals/modals.component';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html'
})
export class CompaniesComponent {
  @Input() isModal: boolean = false;
  @ViewChild(MatPaginator, {static: false}) paginator: any;
  @ViewChild(MatSort, {static: false}) sort: any;

  displayedColumns: string[] = ['ruc', 'name', 'address', 'state_name', 'actions'];
  resultsLength = 0;
  isLoadingResults = true;
  tableFilter: TableFilter;
  companies: Company[] = [];

  constructor(
    private companyService: CompanyService,
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

          return this.companyService.getAll(this.tableFilter.params())
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
      .subscribe(data => (this.companies = data));
  }

  createOrEdit(company?: Company) {
    const modalRef = this.ngbModal.open(CompaniesStoreOrUpdateComponent, { backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' });

    if (company) {
      modalRef.componentInstance.company = Object.assign({}, company);
    }

    modalRef.result
      .then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }

  add(company: Company) {
    this.activeModal.close(company)
  }
}

@Component({
  selector: 'company-search',
  template: `
    <input type="text" class="form-control"
      [class.not-events]="searching"
      [(ngModel)]="model"
      [ngbTypeahead]="search"
      [resultFormatter]="formatter"
      (selectItem)="selectItem($event)"
      placeholder="Buscar nueva empresa"/>
  `
})
export class SearchComponent {
  @Output() select = new EventEmitter<Company>();
  model: any;
  searching = false;
  formatter = (result: Company) => result.name;

  constructor(
    private companyService: CompanyService
  ) {}

  selectItem(event: any) {
    event.preventDefault();
    if (event.item) this.select.emit(event.item);
  }

  search: OperatorFunction<string, readonly any[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => {
        this.searching = true;

        const data = new HttpParams().set('search', term);

        return this.companyService.getAll(data)
          .pipe(
            catchError(HttpUtils.paginationCatchError)
          )
      }),
      map(response => {
        this.searching = false;

        return response.data.items;
      })
    )
}

@Component({
  selector: 'app-card-warn',
  template: `
    <spinner *ngIf="isLoadingResults"></spinner>
    <div class="card m-0">
      <div class="card-header bg-light">
        <h4 class="card-title">
          <span *ngIf="!company.id">Creación de nuevo</span>
          <span *ngIf="company.id">Edición de </span>
          proveedor
        </h4>
        <span class="btn-close-2" (click)="activeModal.dismiss()"></span>
      </div>
      <div class="card-body">
        <div class="form-body">
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label for="name">Nombre</label>
                <input type="text" name="name" class="form-control" placeholder="Nombre" [(ngModel)]="company.name">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label for="address">Dirección</label>
                <input type="text" name="address" class="form-control" placeholder="Dirección" [(ngModel)]="company.address">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="mb-3">
                <label for="code" class="control-label">RUC</label>
                <input type="text" name="code" class="form-control" placeholder="Código" [(ngModel)]="company.ruc">
              </div>
            </div>
            <div class="col-6">
              <div class="mb-3">
                <div class="mb-3"><label class="control-label">Estado</label>
                  <div class="form-check">
                    <input type="radio" name="company-state" class="form-check-input" [value]="1" [(ngModel)]="company.state">
                    <label for="state-active" class="form-check-label">Activo</label>
                  </div>
                  <div class="form-check">
                    <input type="radio" name="company-state" class="form-check-input" [value]="0" [(ngModel)]="company.state">
                    <label for="state-inactive" class="form-check-label">Inactivo</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label for="website">Sitio web</label>
                <input type="text" name="website" class="form-control" placeholder="Sitio web" [(ngModel)]="company.website">
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
export class CompaniesStoreOrUpdateComponent {
  @Input() company: Company = {
    ruc: '',
    name: '',
    address: '',
    website: '',
    state: 1
  };

  isLoadingResults: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private companyService: CompanyService,
    private ngbModal: NgbModal
  ) {}

  save() {
    this.isLoadingResults = true;
    const service = !this.company.id ? this.companyService.store(this.company) : this.companyService.update(this.company);

    service
      .subscribe(response => {
        const modalRef  = this.ngbModal.open(SuccsessModalComponent, { centered: true });
        modalRef.componentInstance.message = response.message;

        this.isLoadingResults = true;

        this.activeModal.close();
      }, () =>  this.isLoadingResults = false);
  }
}
