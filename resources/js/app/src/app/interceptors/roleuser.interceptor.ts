import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SidebarEventService } from '../shared/sidebar/sidebar.component';

@Injectable()
export class RoleuserInterceptor implements HttpInterceptor {

  constructor(
    private menuEventService: SidebarEventService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
        tap((event: HttpEvent<unknown>) => {
          if (event instanceof HttpResponse) {
            const role = event.headers.get('Role-user');

            if (role) {
              this.menuEventService.dispathEvent(role);
            }
          }
        })
    );
  }
}
