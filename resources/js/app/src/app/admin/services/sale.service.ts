import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../../shared/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(
    private httpClient: HttpClient
  ){ }

  store(params: any): Observable<Response> {
    return this.httpClient.post<Response>(`${environment.API_URL}/sale`, params);
  }

  getCustomer(params: any): Observable<Response> {
    return this.httpClient.get<Response>(`${environment.API_URL}/sale/customer`, { params });
  }
}
