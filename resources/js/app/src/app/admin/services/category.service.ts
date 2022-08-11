import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryPaginationResponse } from '../../shared/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<CategoryPaginationResponse> {
    return this.http.get<CategoryPaginationResponse>(`${environment.API_URL}/categories`);
  }
}
