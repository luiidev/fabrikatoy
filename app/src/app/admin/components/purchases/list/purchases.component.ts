import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { merge } from 'rxjs';
import { catchError, map, switchMap, startWith } from 'rxjs/operators';
import { Purchase } from 'src/app/admin/models/purchase.model';
import { PurchaseService } from 'src/app/admin/services/purchase.service';
import HttpUtils from 'src/app/shared/helpers/http.util';
import { TableFilter } from 'src/app/shared/helpers/table.util';
import Utils from 'src/app/shared/helpers/utils';
import { PurchasePaginationResponse } from 'src/app/shared/models/response.model';
import { PurchasesStoreOrUpdateComponent } from '../create-or-update/create-or-update-purchases.component';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html'
})
export class PurchasesComponent {
  @ViewChild(MatPaginator, {static: false})
  set matPaginator(value: MatPaginator) {
    this.tableFilter.paginator = value;
  }
  @ViewChild(MatSort, {static: false})
  set matSort(value: MatSort) {
    this.tableFilter.sort = value;
  }

  displayedColumns: string[] = ['provider', 'document', 'subtotal', 'igv', 'total', 'date', 'state_name', 'actions'];
  resultsLength = 0;
  isLoadingResults = true;
  tableFilter: TableFilter;
  purchases: Purchase[] = [];

  constructor(
    private purchaseService: PurchaseService,
    private router: Router,
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

          return this.purchaseService.getAll(this.tableFilter.params())
            .pipe(
              catchError(HttpUtils.paginationCatchError)
            );
        }),
        map((response: PurchasePaginationResponse) => {
          this.isLoadingResults = false;
          this.resultsLength = response.data.total;

          return response.data.items;
        }),
      )
      .subscribe(data => (this.purchases = data));
  }

  detail(purchase: Purchase) {
    this.router.navigate(['/admin/reporte-de-compras', purchase.uuid]);
  }

  createOrEdit(purchase?: Purchase) {
    const modalRef = this.ngbModal.open(PurchasesStoreOrUpdateComponent, Utils.modalXlIndex1);

    if (purchase) {
      modalRef.componentInstance.purchase = { ...purchase };
    }

    modalRef.result.then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }
}
