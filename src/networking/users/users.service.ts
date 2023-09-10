import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUserById(id:any){
    let API_URL = `${environment.baseUrl}/users/${id}`
    return this.http.get<any>(API_URL)
  }
}
