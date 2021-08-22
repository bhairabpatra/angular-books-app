import { Injectable } from '@angular/core';
import { User } from './user';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    // Node/Express API
    REST_API: string = 'http://localhost:4000/api/';

    // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');




  constructor(private httpClient: HttpClient) {
    console.log("httpheaders"+this.httpHeaders)
  }


   // Add
  AddUser(data: User): Observable<any> {
    let API_URL = `${this.REST_API}/register-user`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  isLogin(data: User): Observable<any> {
    let API_URL = `${this.REST_API}/signin`;
    return this.httpClient.post(API_URL, data)
    .pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      console.log(user)
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
  }));
  }
  getToken(){
    return localStorage.getItem('currentUser');
  }
  isLogedin(){

    if(localStorage.getItem('currentUser')){
      return true
    }
    else{
      return false
    }
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');

  }





  all_User(){
    let API_URL = `${this.REST_API}`;
  return this.httpClient.get( API_URL)

      .pipe(map((res: any) => {
        return res || {}
      }),
       catchError(this.handleError)
    )
  }








    // Error
  handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Handle client error
        errorMessage = error.error.message;
      } else {
        // Handle server error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  }


}

