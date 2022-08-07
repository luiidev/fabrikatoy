import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.model';
import { AuthUserResponse } from '../../shared/models/response.model';

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
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        this.router.navigate(['/login']);
      })
  }

  getUser(): string | null {
    return localStorage.getItem('user');
  }

  setUser(user: string): void {
    localStorage.setItem('user', user);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
