import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<any> {
    return this.http.get<Pagination>(`${environment.API_URL}/brands`, { params: params });
  }
}
