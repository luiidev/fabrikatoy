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
import { Router } from '@angular/router';

@Injectable()
export class CatchInterceptor implements HttpInterceptor {

  constructor(
    private ngbModal: NgbModal,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((err: any) => {
            if(err instanceof HttpErrorResponse && !err.url?.includes('/login')) {
              const modalRef = this.ngbModal.open(WarnModalComponent, { centered: true, backdropClass: 'z-index-backdrop-warn', windowClass: 'z-index-window-warn' });
              modalRef.componentInstance.message = err.error.message;

              if (err.status === 401) {
                this.router.navigate(['/login']);
              }
            }

            return throwError(err);
        }),
      );
  }
}
