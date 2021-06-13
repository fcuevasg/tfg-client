import { Injectable } from '@angular/core';
import {userInfo} from '../interfaces/userInfo'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:userInfo;

//Este es la api para el usuario
  constructor() { }


}
