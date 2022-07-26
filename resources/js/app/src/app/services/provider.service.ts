import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination.model';
import { Provider } from '../models/provider.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<any> {
    return this.http.get<Pagination>(`${environment.API_URL}/providers`, { params: params });
  }

  store(provider: Provider) {
    return this.http.post<any>(`${environment.API_URL}/providers`, provider);
  }

  update(provider: Provider) {
    return this.http.put<any>(`${environment.API_URL}/providers/${provider.id}`, provider);
  }
}
