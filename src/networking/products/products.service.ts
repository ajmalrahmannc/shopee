import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    let API_URL = `${environment.baseUrl}/products`;
    return this.http.get<any>(API_URL);
  }
}
