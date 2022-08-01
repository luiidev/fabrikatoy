import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand.model';
import { BrandPaginationResponse, BrandResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<BrandPaginationResponse> {
    return this.http.get<BrandPaginationResponse>(`${environment.API_URL}/brands`, { params: params });
  }

  store(brand: Brand): Observable<BrandResponse> {
    return this.http.post<BrandResponse>(`${environment.API_URL}/brands`, brand);
  }

  update(brand: Brand): Observable<BrandResponse> {
    return this.http.put<BrandResponse>(`${environment.API_URL}/brands/${brand.id}`, brand);
  }
}
