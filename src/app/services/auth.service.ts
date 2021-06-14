import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:8080'

  token;
 
  constructor(private http: HttpClient,private router: Router) { }



  login(email: string, password: string) {
    this.http.post(this.baseUrl + '/authenticate', {email: email,password: password})
    .subscribe((resp: any) => {
     
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
      
      });


      
}

logout() {
  localStorage.removeItem('token');
}

public get logIn(): boolean {
  return (localStorage.getItem('token') !== null);
}


}
