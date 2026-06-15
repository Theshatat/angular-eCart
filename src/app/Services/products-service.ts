import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../Environment/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  apiUrl = `${environment.apiUrl}/products`; 

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }
  getProductsByCatId(catId:number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}?catId=${catId}`);
  }
  getProductById(id:number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiUrl, product);
  }
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  updateProduct(id: number, product: IProduct): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, product);
  }
  mapIdsToArray(): Observable<number[]> {
  return this.getAllProducts().pipe(
    map(products => products.map(product => Number(product.id)))
  );
}
}
