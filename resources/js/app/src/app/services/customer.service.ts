import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';
import { Pagination } from '../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<any> {
    return this.http.get<Pagination>(`${environment.API_URL}/customers`, { params });
  }

  store(customer: Customer): Observable<any> {
    return this.http.post(`${environment.API_URL}/customers`, customer);
  }

  update(customer: Customer): Observable<any> {
    return this.http.put(`${environment.API_URL}/customers/${customer.id}`, customer);
  }
}
