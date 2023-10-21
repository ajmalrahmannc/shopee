import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateUserService {

  private isUserLoggedIn = new Subject<boolean>();

  constructor() { }

  setValidateUser(userStatus:boolean){
    return this.isUserLoggedIn.next(userStatus);
  }

  getValidateUser():Observable<boolean> {
    return this.isUserLoggedIn.asObservable();
  }
}
