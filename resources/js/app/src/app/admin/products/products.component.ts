import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Pagination } from 'src/app/models/pagination.model';
import { TableFilter } from 'src/app/helpers/table.util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import HttpUtils from 'src/app/helpers/http.util';
import Utils from 'src/app/helpers/utils';
import * as Global from 'src/app/helpers/utils';
import { SuccsessModalComponent } from '../modals/modals.component';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import ProductRequest from 'src/app/models/product.model';
import { Provider } from 'src/app/models/provider.model';
import { ProvidersComponent } from '../providers/providers.component';
import { BrandsComponent } from '../brands/brands.component';
import { CompaniesComponent } from '../companies/companies.component';
import { Brand } from 'src/app/models/brand.model';
import { Company } from 'src/app/models/company.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductsComponent {
  @ViewChild(MatPaginator, {static: false}) paginator: any;
  @ViewChild(MatSort, {static: false}) sort: any;

  displayedColumns: string[] = ['code', 'name', 'quantity', 'unit', 'price', 'higher_price', 'average_price', 'state_name', 'actions'];
  resultsLength = 0;
  isLoadingResults = true;
  expandedElement: Product | null = null;
  tableFilter: TableFilter;
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private ngbModal: NgbModal
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

          return this.productService.getAll(this.tableFilter.params())
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
      .subscribe(data => (this.products = data));
  }

  createOrEdit(product?: Product) {
    const modalRef = this.ngbModal.open(ProductStoreOrUpdateComponent);

    if (product) {
      modalRef.componentInstance.product = Utils.replicate(product);
    }

    modalRef.result.then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }
}

@Component({
  selector: 'app-card-warn',
  template: `
    <spinner *ngIf="isLoadingResults"></spinner>
    <div class="card m-0">
      <div class="card-header bg-light">
        <h4 class="card-title">
          <span *ngIf="!product.id">Creación de nuevo</span>
          <span *ngIf="product.id">Edición de </span>
          producto
        </h4>
        <span class="btn-close-2" (click)="activeModal.dismiss()"></span>
      </div>
      <div class="card-body">
        <div class="form-body">
          <div class="row" *ngIf="isSuper">
            <div class="col-12">
              <div class="mb-3">
                <label>Empresa <span class="text-sm font-medium text-muted pointer ml-15" (click)="searchCompany()">Cambiar</span></label>
                <label class="d-block">{{ product.company?.name }}</label>
                <label class="d-block" *ngIf="!product.company">-Empresa autenticada-</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label for="name">Nombre</label>
                <input type="text" name="name" class="form-control" placeholder="Nombre" [(ngModel)]="product.name">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="mb-3">
                <label for="code" class="control-label">Código</label>
                <input type="text" name="code" class="form-control" placeholder="Código" [(ngModel)]="product.code">
              </div>
            </div>
            <div class="col-6">
              <div class="mb-3">
                <div class="mb-3"><label class="control-label">Estado</label>
                  <div class="form-check">
                    <input type="radio" name="stateRadio" class="form-check-input" [value]="1" [(ngModel)]="product.state">
                    <label for="state-active" class="form-check-label">Activo</label>
                  </div>
                  <div class="form-check">
                    <input type="radio" name="stateRadio" class="form-check-input" [value]="0" [(ngModel)]="product.state">
                    <label for="state-inactive" class="form-check-label">Inactivo</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label class="control-label">Marca <span class="text-sm font-medium text-muted pointer ml-15" (click)="searchBrand()">Cambiar</span></label>
                <label class="d-block">{{ product.brand?.name }}</label>
                <label class="d-block" *ngIf="!product.brand">-No asignado-</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <div class="align-items-center d-flex justify-content-sm-between mb-2">
                  <label>Proveedores</label>
                  <span class="text-sm font-medium text-muted pointer" (click)="searchProvider()">Agregar proveedor</span>
                </div>
                <div class="table-responsive">
                  <table class="table table-bordered table-hover table-sm mb-0">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th class="text-center w80">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr *ngFor="let provider of product.providers">
                        <td>{{ provider.name }}</td>
                        <td class="text-center">
                          <span class="text-danger pointer" (click)="del(provider)">Eliminar</span>
                        </td>
                      </tr>
                      <tr *ngIf="product.providers.length === 0">
                        <td colspan="2" class="text-center">Sin registros</td>
                      </tr>
                    </tbody>
                  </table>
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
export class ProductStoreOrUpdateComponent {
  @Input() product: Product = {
    code: '',
    name: '',
    state: 1,
    providers: []
  };

  isLoadingResults: boolean = false;
  showChangeCompany: boolean = false;
  isSuper = environment.isSuper;

  constructor(
    public activeModal: NgbActiveModal,
    private productService: ProductService,
    private ngbModal: NgbModal
  ) {}

  save() {
    this.isLoadingResults = true;
    const data = ProductRequest.data(this.product);
    const service = !this.product.id ? this.productService.store(data) : this.productService.update(data);

    service
      .subscribe(response => {
        const modalRef  = this.ngbModal.open(SuccsessModalComponent, { centered: true });
        modalRef.componentInstance.message = response.message;

        this.isLoadingResults = true;

        this.activeModal.close();
      }, () =>  this.isLoadingResults = false);
  }

  del(provider: Provider) {
    const index = this.product.providers.findIndex((parentProvider) => parentProvider.id === provider.id);
    this.product.providers.splice(index, 1);
  }

  searchProvider() {
    const modalRef  = this.ngbModal.open(ProvidersComponent, { size: 'xl' });
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((provider: Provider) => {
      this.product.providers.push(provider);
    }, Utils.none);
  }

  searchBrand() {
    const modalRef  = this.ngbModal.open(BrandsComponent, { size: 'xl' });
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((brand: Brand) => {
      this.product.brand = brand;
      this.product.brand_id = brand.id;
    }, Utils.none);
  }

  searchCompany() {
    const modalRef  = this.ngbModal.open(CompaniesComponent, { size: 'xl' });
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((company: Company) => {
      this.product.company = company;
      this.product.company_id = company.id;
    }, Utils.none);
  }
}
