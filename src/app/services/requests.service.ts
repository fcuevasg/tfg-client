import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {casetaInfo, modalidades} from '../interfaces/casetaInfo'
import { userInfo } from '../interfaces/userInfo';




@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  createRequest(data: any) {
    console.log(data)
  }

  constructor() { }

  userInfoMockup:userInfo ={
    id:"1",
    nombre:"Javier",
    apellido:"Cuevas",
    dni:"49044939S",
    telefono:"722477358",
    domicilio:"Calle ganado nº14",
    CP:"11540",
    provincia:"Cádiz",
    correo:"cuevas@gmail.com",


  }
  infoMockup:casetaInfo = {
    info:this.userInfoMockup,
    name:"CasetaTest",
    CIF:"123456",
    telefonos:["722477358"],
    dSocial:"Calle falsa 123",
    cp:"11540",
    surface:"50m",
    modality:modalidades.JUV

  }

  getRequestByID(id):Observable<casetaInfo>{

    return of(this.infoMockup)



  }
}
