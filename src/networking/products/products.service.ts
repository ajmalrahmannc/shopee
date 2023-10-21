import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(limit:number,skip:number){
    let API_URL = `${environment.baseUrl}/products?limit=${limit}&skip=${skip}`;
    return this.http.get<any>(API_URL);
  }

  getAllCategories() {
    let API_URL = `${environment.baseUrl}/products/categories`;
    return this.http.get<any>(API_URL);
  }

  getSingleProductById(id:number) {
    let API_URL = `${environment.baseUrl}/products/${id}`;
    return this.http.get<any>(API_URL);
  }

  getProductsByCategory(name:string) {
    let API_URL = `${environment.baseUrl}/products/category/${name}`;
    return this.http.get<any>(API_URL);
  }
}
