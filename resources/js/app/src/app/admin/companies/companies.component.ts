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

  createOrEdit(provider?: Company) {
    // const modalRef = this.ngbModal.open(companiesStoreOrUpdateComponent);

    // if (provider) {
    //   modalRef.componentInstance.provider = Object.assign({}, provider);
    // }

    // modalRef.result
    //   .then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }

  add(provider: Company) {
    this.activeModal.close(provider)
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
