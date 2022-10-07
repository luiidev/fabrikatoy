import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { TableFilter } from 'src/app/shared/helpers/table.util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import HttpUtils from 'src/app/shared/helpers/http.util';
import Utils from 'src/app/shared/helpers/utils';
import { ProductService } from 'src/app/admin/services/product.service';
import { Product } from 'src/app/admin/models/product.model';
import { ProductPaginationResponse } from 'src/app/shared/models/response.model';
import { ProductStoreOrUpdateComponent } from '../create-or-update/create-or-update-products.component';

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
  @ViewChild(MatPaginator, {static: false})
  set matPaginator(value: MatPaginator) {
    this.tableFilter.paginator = value;
  }
  @ViewChild(MatSort, {static: false})
  set matSort(value: MatSort) {
    this.tableFilter.sort = value;
  }

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

          return this.productService.getAll(this.tableFilter.params())
            .pipe(
              catchError(HttpUtils.paginationCatchError)
            );
        }),
        map((response: ProductPaginationResponse) => {
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
      modalRef.componentInstance.product = { ...product };
    }

    modalRef.result.then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }
}
