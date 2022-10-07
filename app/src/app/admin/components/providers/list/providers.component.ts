import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { TableFilter } from 'src/app/shared/helpers/table.util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import HttpUtils from 'src/app/shared/helpers/http.util';
import Utils from 'src/app/shared/helpers/utils';
import { ProviderService } from 'src/app/admin/services/provider.service';
import { Provider } from 'src/app/admin/models/provider.model';
import { ProviderPaginationResponse } from 'src/app/shared/models/response.model';
import { ProviderStoreOrUpdateComponent } from '../create-or-update/create-or-update-providers.component';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html'
})
export class ProvidersComponent {
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
  providers: Provider[] = [];

  constructor(
    private providerService: ProviderService,
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

          return this.providerService.getAll(this.tableFilter.params())
            .pipe(
              catchError(HttpUtils.paginationCatchError)
            );
        }),
        map((response: ProviderPaginationResponse) => {
          this.isLoadingResults = false;
          this.resultsLength = response.data.total;

          return response.data.items;
        }),
      )
      .subscribe(data => (this.providers = data));
  }

  createOrEdit(provider?: Provider) {
    const modalRef = this.ngbModal.open(ProviderStoreOrUpdateComponent, this.isModal ? Utils.modalIndex3 : {});

    if (provider) {
      modalRef.componentInstance.provider = { ...provider };
    }

    modalRef.result
      .then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }

  add(provider: Provider) {
    this.activeModal.close(provider)
  }
}
