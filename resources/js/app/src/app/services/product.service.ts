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

  getForSale(params: any): Observable<any> {
    let httpParams = new HttpParams();

    if (params.search) {
      httpParams = httpParams.set('search', params.search);
    }

    if (params.category_id) {
      httpParams = httpParams.set('category_id', params.category_id);
    }

    return this.http.get<any>(`${environment.API_URL}/products-for-sale`, { params: httpParams });
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/categories`);
  }

  store(product: Product): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}/products`, product);
  }

  update(product: Product): Observable<any> {
    return this.http.put<any>(`${environment.API_URL}/products/${product.id}`, product);
  }
}
