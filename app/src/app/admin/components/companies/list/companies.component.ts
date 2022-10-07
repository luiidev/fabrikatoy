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
import { Company } from 'src/app/admin/models/company.model';
import { CompanyService } from 'src/app/admin/services/company.service';
import { CompanyPaginationResponse } from 'src/app/shared/models/response.model';
import { CompaniesStoreOrUpdateComponent } from '../create-or-update/create-or-update-companies.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html'
})
export class CompaniesComponent {
  @Input() isModal = false;
  @ViewChild(MatPaginator, {static: false})
  set matPaginator(value: MatPaginator) {
    this.tableFilter.paginator = value;
  }
  @ViewChild(MatSort, {static: false})
  set matSort(value: MatSort) {
    this.tableFilter.sort = value;
  }

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

          return this.companyService.getAll(this.tableFilter.params())
            .pipe(
              catchError(HttpUtils.paginationCatchError)
            );
        }),
        map((response: CompanyPaginationResponse) => {
          this.isLoadingResults = false;
          this.resultsLength = response.data.total;

          return response.data.items;
        }),
      )
      .subscribe(data => (this.companies = data));
  }

  createOrEdit(company?: Company) {
    const modalRef = this.ngbModal.open(CompaniesStoreOrUpdateComponent, Utils.modalIndex3);

    if (company) {
      modalRef.componentInstance.company = { ...company };
    }

    modalRef.result
      .then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }

  add(company: Company) {
    this.activeModal.close(company)
  }
}

