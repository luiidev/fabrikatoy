import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductFilter } from '../models/product.model';
import { ProductArrayResponse, ProductPaginationResponse, ProductResponse } from '../../shared/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: HttpParams): Observable<ProductPaginationResponse> {
    return this.http.get<ProductPaginationResponse>(`${environment.API_URL}/products`, { params });
  }

  getForSale(params: ProductFilter): Observable<ProductArrayResponse> {
    let httpParams = new HttpParams();

    if (params.search) {
      httpParams = httpParams.set('search', params.search);
    }

    if (params.category_id) {
      httpParams = httpParams.set('category_id', params.category_id);
    }

    return this.http.get<ProductArrayResponse>(`${environment.API_URL}/products-for-sale`, { params: httpParams });
  }

  store(product: Product): Observable<ProductResponse> {
    return this.http.post<ProductResponse>(`${environment.API_URL}/products`, product);
  }

  update(product: Product): Observable<ProductResponse> {
    return this.http.put<ProductResponse>(`${environment.API_URL}/products/${product.id}`, product);
  }
}
