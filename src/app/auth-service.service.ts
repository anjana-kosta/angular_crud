import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  hiddenUnlockcode: any = null;

  hiddenUnlockins: any = null;

  constructor(private http: HttpClient) {}

 

  getUserDetail() {
    if (sessionStorage.getItem('userData')) {
      return sessionStorage.getItem('userData');
    } else {
      return null;
    }
  }

  setDataInLocalStorage(variableName: any, data: any) {
    sessionStorage.setItem(variableName, data);
  }

  clearStorage() {
    sessionStorage.clear();
  }



  isLoggedin() {
    return !!sessionStorage.getItem('userData');
  }

  sethiddenUnlockcode(data: any) {
    this.hiddenUnlockcode = data;
  }

  gethiddenUnlockcode() {
    return this.hiddenUnlockcode;
  }

  sethiddenUnlockins(data: any) {
    this.hiddenUnlockins = data;
  }

  gethiddenUnlockins() {
    return this.hiddenUnlockcode;
  }

  loginac(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${baseUrl}` + 'signin', data);
  }


}

