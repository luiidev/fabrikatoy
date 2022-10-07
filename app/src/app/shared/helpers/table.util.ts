import { HttpParams } from "@angular/common/http";
import { EventEmitter } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface Filter {
  term: string;
  search: EventEmitter<string>;
}

export class TableFilter {
  public paginator!: MatPaginator;
  public sort!: MatSort;
  public filter: Filter = {
    term: '',
    search: new EventEmitter()
  };

  constructor() {
    this.filter.search.subscribe(term => {
      if (term !== undefined) {
        this.filter.term = term;
      }
    })
  }

  params() {
    return new HttpParams()
      .set('search', this.filter.term)
      .set('sort', this.sort.active)
      .set('direction', this.sort.direction)
      .set('page', this.paginator.pageIndex)
      .set('per_page', this.paginator.pageSize);
  }
}
