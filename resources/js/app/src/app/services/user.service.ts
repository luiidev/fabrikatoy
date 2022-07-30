import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Pagination } from '../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<any> {
    return this.http.get<Pagination>(`${environment.API_URL}/users`, { params: params });
  }

  get(id: number): Observable<any> {
    return this.http.get<Pagination>(`${environment.API_URL}/users/${id}`);
  }

  store(user: User): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}/users`, user);
  }

  update(user: User): Observable<any> {
    return this.http.put<any>(`${environment.API_URL}/users/${user.id}`, user);
  }
}
