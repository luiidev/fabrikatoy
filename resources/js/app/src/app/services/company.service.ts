import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TableFilter } from '../helpers/table.util';
import { Observable } from 'rxjs';
import { Pagination } from '../models/pagination.model';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<any> {
    return this.http.get<Pagination>(`${environment.API_URL}/companies`, { params: params });
  }

  store(company: Company) {
    return this.http.post<any>(`${environment.API_URL}/companies`, company);
  }

  update(company: Company) {
    return this.http.put<any>(`${environment.API_URL}/companies/${company.id}`, company);
  }
}
