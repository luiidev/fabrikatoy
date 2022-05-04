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
import { ProviderService } from 'src/app/services/provider.service';
import { SuccsessModalComponent } from '../modals/modals.component';
import { Provider } from 'src/app/models/provider.model';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html'
})
export class ProvidersComponent {
  @Input() isModal: boolean = false;
  @ViewChild(MatPaginator, {static: false}) paginator: any;
  @ViewChild(MatSort, {static: false}) sort: any;

  displayedColumns: string[] = ['ruc', 'name', 'address', 'state_name', 'actions'];
  resultsLength = 0;
  isLoadingResults = true;
  tableFilter: TableFilter;
  providers: Provider[] = [];

  constructor(
    private providerService: ProviderService,
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

          return this.providerService.getAll(this.tableFilter.params())
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
      .subscribe(data => (this.providers = data));
  }

  createOrEdit(provider?: Provider) {
    const modalRef = this.ngbModal.open(ProviderStoreOrUpdateComponent);

    if (provider) {
      modalRef.componentInstance.provider = Object.assign({}, provider);
    }

    modalRef.result
      .then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }

  add(provider: Provider) {
    this.activeModal.close(provider)
  }
}

@Component({
  selector: 'app-card-warn',
  template: `
    <spinner *ngIf="isLoadingResults"></spinner>
    <div class="card m-0">
      <div class="card-header bg-light">
        <h4 class="card-title">
          <span *ngIf="!provider.id">Creación de nuevo</span>
          <span *ngIf="provider.id">Edición de </span>
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
                <input type="text" name="name" class="form-control" placeholder="Nombre" [(ngModel)]="provider.name">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label for="name">Dirección</label>
                <input type="text" name="address" class="form-control" placeholder="Dirección" [(ngModel)]="provider.address">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="mb-3">
                <label for="code" class="control-label">RUC</label>
                <input type="text" name="code" class="form-control" placeholder="Código" [(ngModel)]="provider.ruc">
              </div>
            </div>
            <div class="col-6">
              <div class="mb-3">
                <div class="mb-3"><label class="control-label">Estado</label>
                  <div class="form-check">
                    <input type="radio" name="stateRadio" class="form-check-input" [value]="1" [(ngModel)]="provider.state">
                    <label for="state-active" class="form-check-label">Activo</label>
                  </div>
                  <div class="form-check">
                    <input type="radio" name="stateRadio" class="form-check-input" [value]="0" [(ngModel)]="provider.state">
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
export class ProviderStoreOrUpdateComponent {
  @Input() provider: Provider = {
    ruc: '',
    name: '',
    address: '',
    state: 1
  };

  isLoadingResults: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private providerService: ProviderService,
    private ngbModal: NgbModal
  ) {}

  save() {
    this.isLoadingResults = true;
    const service = !this.provider.id ? this.providerService.store(this.provider) : this.providerService.update(this.provider);

    service
      .subscribe(response => {
        const modalRef  = this.ngbModal.open(SuccsessModalComponent, { centered: true });
        modalRef.componentInstance.message = response.message;

        this.isLoadingResults = true;

        this.activeModal.close();
      }, () =>  this.isLoadingResults = false);
  }
}
