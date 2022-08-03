import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service.';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  headerName = 'X-XSRF-TOKEN';

  constructor(
    private tokenXsrf: HttpXsrfTokenExtractor,
    private authService: AuthService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes('api/csrf-cookie')) {
      request = this.headers(request);
    }

    return next.handle(request)
  }

  headers(request: HttpRequest<unknown>) {
    request = request.clone({
      withCredentials: true,
      headers: request.headers
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
    })

    const token = this.authService.getToken();
    const tokenXsrf = this.tokenXsrf.getToken();

    if (token !== null) {
      request = request.clone({
          headers: request.headers
            .set('Authorization', `Bearer ${token}`)
      })
    }

    if (tokenXsrf !== null) {
      request = request.clone({
        headers: request.headers
          .set('X-XSRF-TOKEN', tokenXsrf)
      })
    }

    return request;
  }
}
