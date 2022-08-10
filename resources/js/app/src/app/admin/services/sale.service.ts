import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response, SalePaginationResponse, SaleResponse } from '../../shared/models/response.model';
import { SearchCustomer } from '../models/customer.model';
import { SaleRecord } from '../models/sale-record.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(
    private http: HttpClient
  ){ }

  getAll(params: HttpParams): Observable<SalePaginationResponse> {
    return this.http.get<SalePaginationResponse>(`${environment.API_URL}/sales`, { params });
  }

  get(uuid: string): Observable<SaleResponse> {
    return this.http.get<SaleResponse>(`${environment.API_URL}/sales/${uuid}`);
  }

  store(params: SaleRecord): Observable<SaleResponse> {
    return this.http.post<SaleResponse>(`${environment.API_URL}/sales`, params);
  }

  getCustomer(searchCustomer: SearchCustomer): Observable<Response> {
    const params = new HttpParams()
      .set('document_type', searchCustomer.document_type)
      .set('document_number', searchCustomer.document_number);

    return this.http.get<Response>(`${environment.API_URL}/sales/customer`, { params });
  }
}
