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
import { User } from 'src/app/admin/models/user.model';
import { UserService } from 'src/app/admin/services/user.service';
import { UserPaginationResponse } from 'src/app/shared/models/response.model';
import { UsersStoreOrUpdateComponent } from '../create-or-update/create-or-update-users.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  @Input() isModal = false;
  @ViewChild(MatPaginator, {static: false})
  set matPaginator(value: MatPaginator) {
    this.tableFilter.paginator = value;
  }
  @ViewChild(MatSort, {static: false})
  set matSort(value: MatSort) {
    this.tableFilter.sort = value;
  }

  displayedColumns: string[] = ['first_name', 'branch_office', 'nick', 'role', 'state_name', 'actions'];
  resultsLength = 0;
  isLoadingResults = true;
  tableFilter: TableFilter;
  users: User[] = [];

  constructor(
    private userService: UserService,
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

          return this.userService.getAll(this.tableFilter.params())
            .pipe(
              catchError(HttpUtils.paginationCatchError)
            );
        }),
        map((response: UserPaginationResponse) => {
          this.isLoadingResults = false;
          this.resultsLength = response.data.total;

          return response.data.items;
        }),
      )
      .subscribe(data => (this.users = data));
  }

  createOrEdit(user?: User) {
    const modalRef = this.ngbModal.open(UsersStoreOrUpdateComponent, this.isModal ? Utils.modalIndex3 : {});

    if (user) {
      modalRef.componentInstance.user = { ...user };
    }

    modalRef.result
      .then(() => this.tableFilter.filter.search.emit(), Utils.none);
  }

  add(user: User) {
    this.activeModal.close(user)
  }
}
