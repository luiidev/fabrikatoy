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
import BrandRequest, { Brand } from 'src/app/models/brand.model';
import { BrandService } from 'src/app/services/brand.service';
import { SuccsessModalComponent } from '../modals/modals.component';
import { HttpParams } from '@angular/common/http';
import { CompaniesComponent } from '../companies/companies.component';
import { Company } from 'src/app/models/company.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html'
})
export class BrandsComponent {
  @Input() isModal: boolean = false;
  @ViewChild(MatPaginator, {static: false}) paginator: any;
  @ViewChild(MatSort, {static: false}) sort: any;

  displayedColumns: string[] = ['name', 'state_name', 'actions'];
  resultsLength = 0;
  isLoadingResults = true;
  tableFilter: TableFilter;
  brands: Brand[] = [];

  constructor(
    private brandService: BrandService,
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

          return this.brandService.getAll(this.tableFilter.params())
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
      .subscribe(data => (this.brands = data));
  }

  createOrEdit(brand?: Brand) {
    const modalRef = this.ngbModal.open(BrandsStoreOrUpdateComponent, { backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' });

    if (brand) {
      modalRef.componentInstance.brand = Object.assign({}, brand);
    }

    modalRef.result
      .then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }

  add(brand: Brand) {
    this.activeModal.close(brand)
  }
}

@Component({
  selector: 'app-card-warn',
  template: `
    <spinner *ngIf="isLoadingResults"></spinner>
    <div class="card m-0">
      <div class="card-header bg-light">
        <h4 class="card-title">
          <span *ngIf="!brand.id">Creación de nuevo</span>
          <span *ngIf="brand.id">Edición de </span>
          marca
        </h4>
        <span class="btn-close-2" (click)="activeModal.dismiss()"></span>
      </div>
      <div class="card-body">
        <div class="form-body">
          <div class="row" *ngIf="isSuper">
            <div class="col-12">
              <div class="mb-3">
                <label>Empresa <span class="text-sm font-medium text-muted pointer ml-15" (click)="searchCompany()">Cambiar</span></label>
                <label class="d-block">{{ brand.company?.name }}</label>
                <label class="d-block" *ngIf="!brand.company">-Empresa autenticada-</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label for="name">Nombre</label>
                <input type="text" name="name" class="form-control" placeholder="Nombre" [(ngModel)]="brand.name">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="mb-3">
                <div class="mb-3"><label class="control-label">Estado</label>
                  <div class="form-check">
                    <input type="radio" name="brand-state" class="form-check-input" [value]="1" [(ngModel)]="brand.state">
                    <label for="state-active" class="form-check-label">Activo</label>
                  </div>
                  <div class="form-check">
                    <input type="radio" name="brand-state" class="form-check-input" [value]="0" [(ngModel)]="brand.state">
                    <label for="state-inactive" class="form-check-label">Inactivo</label>
                  </div>
                </div>
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
export class BrandsStoreOrUpdateComponent {
  @Input() brand: Brand = {
    name: '',
    state: 1
  };

  isLoadingResults: boolean = false;
  isSuper = environment.isSuper;

  constructor(
    public activeModal: NgbActiveModal,
    private brandService: BrandService,
    private ngbModal: NgbModal
  ) {}

  save() {
    this.isLoadingResults = true;
    const data = BrandRequest.data(this.brand);
    const service = !this.brand.id ? this.brandService.store(data) : this.brandService.update(data);

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
      this.brand.company = company;
      this.brand.company_id = company.id;
    }, Utils.none);
  }
}
