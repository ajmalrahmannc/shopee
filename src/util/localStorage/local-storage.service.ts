import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor() { }

  setUserId(setData:any){
    localStorage.setItem('userId',JSON.stringify(setData))
  }

  getUserId(){
    return JSON.parse(localStorage.getItem('userId') || '')
  }

  checkIfuserIsLoggedIn():boolean {
    if(localStorage.getItem('userId')){
      return true
    }
    else{
      return false
    }
  }

}
