import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServerProduct } from '../Models/iserver-product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServer {
   apiUrl = 'http://localhost:3000/products';

   // Inject HttpClient to make HTTP requests
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IServerProduct[]> {
    return this.http.get<IServerProduct[]>(this.apiUrl);
  }
}
