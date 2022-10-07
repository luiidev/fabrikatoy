import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';
import { catchError, map, switchMap, startWith } from 'rxjs/operators';
import { TableFilter } from 'src/app/shared/helpers/table.util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import HttpUtils from 'src/app/shared/helpers/http.util';
import Utils from 'src/app/shared/helpers/utils';
import { BrandService } from 'src/app/admin/services/brand.service';
import { Brand } from 'src/app/admin/models/brand.model';
import { BrandPaginationResponse } from 'src/app/shared/models/response.model';
import { BrandsStoreOrUpdateComponent } from '../create-or-update/create-or-update-brands.component';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html'
})
export class BrandsComponent {
  @Input() isModal = false;
  @ViewChild(MatPaginator, {static: false})
  set matPaginator(value: MatPaginator) {
    this.tableFilter.paginator = value;
  }
  @ViewChild(MatSort, {static: false})
  set matSort(value: MatSort) {
    this.tableFilter.sort = value;
  }

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
    this.tableFilter.sort.sortChange.subscribe(() => this.tableFilter.paginator.firstPage());

    merge(
      this.tableFilter.sort.sortChange,
      this.tableFilter.paginator.page,
      this.tableFilter.filter.search
      )
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;

          return this.brandService.getAll(this.tableFilter.params())
            .pipe(
              catchError(HttpUtils.paginationCatchError)
            );
        }),
        map((response: BrandPaginationResponse) => {
          this.isLoadingResults = false;
          this.resultsLength = response.data.total;

          return response.data.items;
        }),
      )
      .subscribe(data => (this.brands = data));
  }

  createOrEdit(brand?: Brand) {
    const modalRef = this.ngbModal.open(BrandsStoreOrUpdateComponent, this.isModal ? Utils.modalIndex3 : {});

    if (brand) {
      modalRef.componentInstance.brand = { ...brand };
    }

    modalRef.result
      .then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }

  add(brand: Brand) {
    this.activeModal.close(brand)
  }
}
