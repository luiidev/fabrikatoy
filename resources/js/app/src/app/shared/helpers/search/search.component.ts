import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'search',
  template: `
    <div class="input-group mb-3">
      <span class="input-group-text">
        <i class="bi bi-search"></i>
      </span>
        <input type="text" class="form-control" [ngModel]='term' (ngModelChange)='changed($event)' placeholder="Buscar">
        <div class="btn btn-success" *ngIf="createButton" (click)="create.emit()">
          <i class="fa fa-plus mr-5"></i>
          <span>Nuevo</span>
        </div>
    </div>
  `
})
export class SearchComponent {
  @Output() searchTerm = new EventEmitter<string>();
  @Output() create = new EventEmitter<string>();
  @Input() createButton = false;

  term = '';
  modelSearchChanged: Subject<string> = new Subject<string>();

  constructor() {
    this.modelSearchChanged
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(term => {
        this.searchTerm.emit(term);
      });
  }

  changed(term: string) {
      this.modelSearchChanged.next(term);
  }
}
