import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, pipe, Subject, tap, zip } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(user: User) {
    return zip(
      this.http.get<void>(`${environment.API_URL}/csrf-cookie`),
      this.http.post<any>(`${environment.API_URL}/login`, user)
    )
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
