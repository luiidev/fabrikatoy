import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BranchOfficePaginationResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<BranchOfficePaginationResponse> {
    return this.http.get<BranchOfficePaginationResponse>(`${environment.API_URL}/branch-offices`, { params })
  }
}
