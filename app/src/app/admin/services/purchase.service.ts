import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PurchasePaginationResponse, PurchaseResponse } from '../../shared/models/response.model';
import { Purchase } from '../models/purchase.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(
    private http: HttpClient
  ){ }

  getAll(params: HttpParams): Observable<PurchasePaginationResponse> {
    return this.http.get<PurchasePaginationResponse>(`${environment.API_URL}/purchases`, { params });
  }

  get(uuid: string): Observable<PurchaseResponse> {
    return this.http.get<PurchaseResponse>(`${environment.API_URL}/purchases/${uuid}`);
  }

  store(purchase: Purchase): Observable<PurchaseResponse> {
    return this.http.post<PurchaseResponse>(`${environment.API_URL}/purchases`, purchase);
  }

  update(purchase: Purchase): Observable<PurchaseResponse> {
    return this.http.put<PurchaseResponse>(`${environment.API_URL}/purchases/${purchase.id}`, purchase);
  }
}
