import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.model';
import { AuthUserResponse } from '../../shared/models/response.model';
import { User } from 'src/app/admin/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: Login): Observable<[void, AuthUserResponse]> {
    return zip(
      this.http.get<void>(`${environment.API_URL}/csrf-cookie`),
      this.http.post<AuthUserResponse>(`${environment.API_URL}/login`, user)
    )
  }

  logout(): void {
    this.http.post<void>(`${environment.API_URL}/logout`, {})
      .subscribe(() => {
        this.clearStorage();
      });
  }

  logoutExpired = this.clearStorage;

  clearStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['/login']);
  }

  get user(): User | null {
    const user = localStorage.getItem('user');

    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  set user(user: User | null) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  set token(token: string | null) {
    if (token) {
      localStorage.setItem('token', token);
    }
  }
}
