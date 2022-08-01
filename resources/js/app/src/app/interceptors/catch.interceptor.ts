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
import { WarnModalComponent } from '../helpers/modals/alerts.component';
import Utils from '../helpers/utils';
import { AuthService } from '../services/auth.service.';

@Injectable()
export class CatchInterceptor implements HttpInterceptor {

  constructor(
    private ngbModal: NgbModal,
    private authService: AuthService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((event: HttpEvent<unknown>) => {
            if(event instanceof HttpErrorResponse && !event.url?.includes('/login')) {
              const modalRef = this.ngbModal.open(WarnModalComponent, Utils.modalCenterIndex3);
              modalRef.componentInstance.message = event.error.message;

              if (event.status === 401) {
                this.authService.logout();
              }
            }

            return throwError(() => event);
        }),
      );
  }
}
