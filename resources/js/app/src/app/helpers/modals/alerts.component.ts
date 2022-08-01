import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-warn',
  template: `
    <div class="card m-0">
      <div class="card-body">
        <h4 class="card-title m-0 text-center text-warning">Advertencia</h4>
      </div>
      <div class="card-body">
        <p class="text-center m-0">{{ message }}</p>
      </div>
      <div class="card-footer text-center">
        <span class="btn btn-warning" (click)="activeModal.close('Close click')">Cerrar</span>
      </div>
    </div>
  `
})
export class WarnModalComponent {
  @Input() message = '';

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-card-success',
  template: `
    <div class="card m-0">
      <div class="card-body">
        <h4 class="card-title m-0 text-center text-success">Confirmación</h4>
      </div>
      <div class="card-body">
        <p class="text-center m-0">{{ message }}</p>
      </div>
      <div class="card-footer text-center">
        <span class="btn btn-success" (click)="activeModal.close()">Cerrar</span>
      </div>
    </div>
  `
})
export class SuccsessModalComponent {
  @Input() message = '';

  constructor(public activeModal: NgbActiveModal) {}
}
