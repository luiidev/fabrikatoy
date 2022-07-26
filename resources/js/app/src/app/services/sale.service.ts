import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(
    private httpClient: HttpClient
  ){ }

  store(params: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.API_URL}/sale`, params);
  }

  getCustomer(params: any): Observable<any> {
    return this.httpClient.get<any>(`${environment.API_URL}/sale/customer`, { params });
  }
}
