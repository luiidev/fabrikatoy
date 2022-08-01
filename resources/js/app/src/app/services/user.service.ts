import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { UserPaginationResponse, UserResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<UserPaginationResponse> {
    return this.http.get<UserPaginationResponse>(`${environment.API_URL}/users`, { params: params });
  }

  get(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${environment.API_URL}/users/${id}`);
  }

  store(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${environment.API_URL}/users`, user);
  }

  update(user: User): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${environment.API_URL}/users/${user.id}`, user);
  }
}
