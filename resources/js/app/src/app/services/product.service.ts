import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<any> {
    return this.http.get<Pagination>(`${environment.API_URL}/products`, { params });
  }

  store(product: Product) {
    return this.http.post<any>(`${environment.API_URL}/products`, product);
  }

  update(product: Product) {
    return this.http.put<any>(`${environment.API_URL}/products/${product.id}`, product);
  }
}
