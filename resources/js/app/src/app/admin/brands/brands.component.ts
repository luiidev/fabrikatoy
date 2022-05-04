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
import { Brand } from 'src/app/models/brand.model';
import { BrandService } from 'src/app/services/brand.service';
import { SuccsessModalComponent } from '../modals/modals.component';
import { HttpParams } from '@angular/common/http';

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

  createOrEdit(provider?: Brand) {
    // const modalRef = this.ngbModal.open(brandsStoreOrUpdateComponent);

    // if (provider) {
    //   modalRef.componentInstance.provider = Object.assign({}, provider);
    // }

    // modalRef.result
    //   .then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }

  add(provider: Brand) {
    this.activeModal.close(provider)
  }
}
