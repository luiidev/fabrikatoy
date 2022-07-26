import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { zip } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: User) {
    return zip(
      this.http.get<void>(`${environment.API_URL}/csrf-cookie`),
      this.http.post<any>(`${environment.API_URL}/login`, user)
    )
  }

  logout() {
    this.http.post<void>(`${environment.API_URL}/logout`, {})
      .subscribe(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        this.router.navigate(['/login']);
      })
  }

  setUser(user: string) {
    localStorage.setItem('user', user);
  }

  getUser() {
    return localStorage.getItem('user');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
