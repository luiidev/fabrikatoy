import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer, SearchCustomer } from '../models/customer.model';
import { CustomerPaginationResponse, CustomerResponse, Response } from '../../shared/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<CustomerPaginationResponse> {
    return this.http.get<CustomerPaginationResponse>(`${environment.API_URL}/customers`, { params });
  }

  store(customer: Customer): Observable<CustomerResponse> {
    return this.http.post<CustomerResponse>(`${environment.API_URL}/customers`, customer);
  }

  update(customer: Customer): Observable<CustomerResponse> {
    return this.http.put<CustomerResponse>(`${environment.API_URL}/customers/${customer.id}`, customer);
  }

  getForSale(searchCustomer: SearchCustomer): Observable<Response> {
    const params = new HttpParams()
      .set('document_type', searchCustomer.document_type)
      .set('document_number', searchCustomer.document_number);

    return this.http.get<Response>(`${environment.API_URL}/customer-for-sale`, { params });
  }
}
