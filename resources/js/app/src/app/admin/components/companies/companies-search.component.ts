import { HttpParams } from "@angular/common/http";
import { Component, EventEmitter, Output } from "@angular/core";
import { NgbTypeaheadSelectItemEvent } from "@ng-bootstrap/ng-bootstrap";
import { catchError, debounceTime, distinctUntilChanged, map, Observable, OperatorFunction, switchMap } from "rxjs";
import HttpUtils from "src/app/helpers/http.util";
import { Company } from "src/app/models/company.model";
import { CompanyService } from "src/app/services/company.service";

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
export class CompaniesSearchComponent {
  @Output() select = new EventEmitter();
  model!: Company;
  searching = false;
  formatter = (result: Company) => result.name;

  constructor(
    private companyService: CompanyService
  ) {}

  selectItem(event: NgbTypeaheadSelectItemEvent) {
    event.preventDefault();
    if (event.item) this.select.emit(event.item);
  }

  search: OperatorFunction<string, readonly Company[]> = (text$: Observable<string>) =>
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
