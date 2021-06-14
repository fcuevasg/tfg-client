import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {userInfo} from '../interfaces/userInfo'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:userInfo;


//Este es la api para el usuario
  constructor(
    private authService: AuthService
  ) { 


  }


  register(data){





  }

  login(data){
    this.authService.login(data.email,data.contraseña)

  }




}
