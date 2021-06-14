import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {casetaInfo, modalidades} from '../interfaces/casetaInfo'
import { message } from '../interfaces/comentario';
import { userInfo } from '../interfaces/userInfo';
import { AuthService } from './auth.service';




@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  createRequest(data: any) {
    console.log(data)
  }

  constructor(
    private authService:AuthService
  ) { }

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

  messageMockup:message[]=[
    {
    user:"usuario 1",
    content:"test 1"
  },{
    user:"usuario 2",
    content:"test 2"
  },
  {
    user:"usuario 3",
    content:"test 3"
  }
]

  getRequestByID(id):Observable<casetaInfo>{



    if(this.authService.logIn){
    //ID = Nombre caseta 
    return of(this.infoMockup)
    }


  }

  getRequestByUser(userID):Observable<casetaInfo[]>{


    if(this.authService.logIn){



    let infoArray:casetaInfo[] = [{
      info:this.userInfoMockup,
      name:"CasetaTest",
      CIF:"123456",
      telefonos:["722477358"],
      dSocial:"Calle falsa 123",
      cp:"11540",
      surface:"50m",
      modality:modalidades.JUV
  
    }, {
      info:this.userInfoMockup,
      name:"CasetaTest 2",
      CIF:"123456",
      telefonos:["722477358"],
      dSocial:"Calle falsa 123",
      cp:"11540",
      surface:"50m",
      modality:modalidades.JUV
  
    },{
      info:this.userInfoMockup,
      name:"CasetaTest 3",
      CIF:"123456",
      telefonos:["722477358"],
      dSocial:"Calle falsa 123",
      cp:"11540",
      surface:"50m",
      modality:modalidades.JUV
  
    },{
      info:this.userInfoMockup,
      name:"CasetaTest 4",
      CIF:"123456",
      telefonos:["722477358"],
      dSocial:"Calle falsa 123",
      cp:"11540",
      surface:"50m",
      modality:modalidades.JUV
  
    },]


    return of(infoArray);
  }

  }




  getMessagesFromRequest(id):Observable<message[]>{
    if(this.authService.logIn){


    return of(this.messageMockup);
    }
  }


  sendComment(id,comment:message){
    if(this.authService.logIn){

    console.log(id,comment)

    //TODO enviar comentario with id and user
    }
  }
}
