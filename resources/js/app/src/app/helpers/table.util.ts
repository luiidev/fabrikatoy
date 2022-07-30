import { HttpParams } from "@angular/common/http";
import { EventEmitter } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface Filter {
  term: string;
  search: EventEmitter<string>;
}

export class TableFilter {
  public filter: Filter;
  public sort: any;
  public paginator: any;

  constructor() {
    this.filter = {
      term: '',
      search: new EventEmitter<any>()
    };

    this.filter.search.subscribe(term => {
      if (term !== undefined) {
        this.filter.term = term;
      }
    })
  }

  startWith(sort: MatSort, paginator: MatPaginator) {
    this.sort = sort;
    this.paginator = paginator;
  }

  params() {
    return new HttpParams()
      .set('search', this.filter.term)
      .set('sort', this.sort?.active)
      .set('direction', this.sort?.direction)
      .set('page', this.paginator?.pageIndex)
      .set('per_page', this.paginator?.pageSize);
  }
}
