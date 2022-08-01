import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company.model';
import { CompanyPaginationResponse, CompanyResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<CompanyPaginationResponse> {
    return this.http.get<CompanyPaginationResponse>(`${environment.API_URL}/companies`, { params: params });
  }

  store(company: Company): Observable<CompanyResponse> {
    return this.http.post<CompanyResponse>(`${environment.API_URL}/companies`, company);
  }

  update(company: Company): Observable<CompanyResponse> {
    return this.http.put<CompanyResponse>(`${environment.API_URL}/companies/${company.id}`, company);
  }
}
