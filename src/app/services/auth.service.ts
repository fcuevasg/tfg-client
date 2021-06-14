import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public  usr:string;

  public baseUrl = 'http://localhost:8080/tfg-servidor'

  token;
 
  constructor(private http: HttpClient,private router: Router) { }




 async login(data) {



let res = await fetch(
  this.baseUrl+"/ServletIdentificar",
  {
    body: JSON.stringify(data),
    method: 'POST',
    mode: 'cors'
  }
)

let auth_token=  await res.text();

if(auth_token.length != 0){
  this.usr = data.correo;
  localStorage.setItem('auth_token', auth_token);
  localStorage.setItem('usuario',data.usuario)
  this.router.navigate(['/login/user']);
} else { 
  this.router.navigate(['/login']);
}

}

logout() {
  localStorage.removeItem('auth_token');
}

public get logIn(): boolean {
  return (localStorage.getItem('auth_token') !== null || localStorage.getItem('auth_token') == "" );
}

public getToken(){
  return localStorage.getItem('auth_token')
}

public get baseURL():string{
  return this.baseURL
}

}
