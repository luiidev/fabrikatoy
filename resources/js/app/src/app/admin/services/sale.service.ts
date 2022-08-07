import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response, SalePaginationResponse, SaleResponse } from '../../shared/models/response.model';

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

  store(params: any): Observable<SaleResponse> {
    return this.http.post<SaleResponse>(`${environment.API_URL}/sales`, params);
  }

  getCustomer(params: any): Observable<Response> {
    return this.http.get<Response>(`${environment.API_URL}/sales/customer`, { params });
  }
}
