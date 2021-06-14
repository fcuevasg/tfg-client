import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {userInfo} from '../interfaces/userInfo'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:userInfo;


//Este es la api para el usuario
  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { 


  }


  async register(data){

     let url = 'http://localhost:8080/tfg-servidor/ServletRegistro'
     let result = await fetch(url,{
       method:"POST",
        body:JSON.stringify(data)});
 
      
    



  }

  login(data){
    this.authService.login(data)

  }



  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
