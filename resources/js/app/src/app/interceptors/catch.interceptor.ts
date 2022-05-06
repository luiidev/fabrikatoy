import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WarnModalComponent } from '../admin/modals/modals.component';

@Injectable()
export class CatchInterceptor implements HttpInterceptor {

  constructor(
    private ngbModal: NgbModal
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((err: any) => {
            if(err instanceof HttpErrorResponse && !err.url?.includes('/login')) {
              const modalRef = this.ngbModal.open(WarnModalComponent, { centered: true, backdropClass: 'bg-light z-index-backdrop-warn', windowClass: 'z-index-window-warn' });
              modalRef.componentInstance.message = err.error.message;
            }

            return throwError(err);
        }),
      );
  }
}
