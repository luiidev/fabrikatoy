import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Provider } from '../models/provider.model';
import { ProviderPaginationResponse, ProviderResponse } from '../../shared/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<ProviderPaginationResponse> {
    return this.http.get<ProviderPaginationResponse>(`${environment.API_URL}/providers`, { params: params });
  }

  store(provider: Provider): Observable<ProviderResponse> {
    return this.http.post<ProviderResponse>(`${environment.API_URL}/providers`, provider);
  }

  update(provider: Provider): Observable<ProviderResponse> {
    return this.http.put<ProviderResponse>(`${environment.API_URL}/providers/${provider.id}`, provider);
  }
}
