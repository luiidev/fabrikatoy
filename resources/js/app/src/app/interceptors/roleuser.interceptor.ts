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
import { environment } from 'src/environments/environment';
import { MenuEventService } from '../shared/sidebar/sidebar.component';

@Injectable()
export class RoleuserInterceptor implements HttpInterceptor {

  constructor(
    private menuEventService: MenuEventService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
        tap((event: any) => {
          if (event instanceof HttpResponse) {
            const role = event.headers.get('Role-user');

            if (role) {
              environment.roleUser = role;
              environment.isSuper = role === 'Super';

              this.menuEventService.dispathEvent(environment.isSuper);
            }
          }
        })
    );
  }
}
