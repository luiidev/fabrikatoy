import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getProfile(): Observable<Response> {
    return this.http.get<Response>(`${environment.API_URL}/me`);
  }
}
