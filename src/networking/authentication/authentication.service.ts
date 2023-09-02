import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  loginApi(postData:any) {
    let API_URL = `${environment.baseUrl}/auth/login`;
    return this.http.post(API_URL,postData)
  }

  registerApi(postData:any) {
    let API_URL = `${environment.baseUrl}/users/add`;
    return this.http.post(API_URL,postData);
  }
}
