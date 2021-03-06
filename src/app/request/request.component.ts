import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RequestsService} from '../services/requests.service'
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'
import {casetaInfo} from '../interfaces/casetaInfo'
import { message} from "../interfaces/comentario"



@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {


  requestID:string;
  private sub:any;
  requestData:casetaInfo;
  requestForm:FormGroup;
  commentForm:FormGroup;

  messages:message[];


  constructor(private route:ActivatedRoute,
              private service: RequestsService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comment:[null,[Validators.required]]
    })

 this.cargarDatos();
 this.requestForm = this.fb.group({
   name: this.requestData.name,
   cif:this.requestData.CIF,
   cp:this.requestData.cp,
   dSocial: this.requestData.dSocial,
   info:this.fb.group({
    CP: this.requestData.info.CP,
    apellido: this.requestData.info.apellido,
    correo: this.requestData.info.correo,
    dni: this.requestData.info.dni,
    domicilio: this.requestData.info.domicilio,
    id: this.requestData.info.id,
    nombre: this.requestData.info.nombre,
    provincia:this.requestData.info.provincia,
    telefono: this.requestData.info.telefono
   }),
   modality: this.requestData.modality,
   surface:this.requestData.surface,
   telefonos:this.requestData.telefonos[0]

 })


 
  }

  lookupRequest(id){
    this.service.getRequestByID(id).subscribe((data) => this.requestData = data);
    console.log(this.requestData)
    this.service.getMessagesFromRequest(id).subscribe((data) => this.messages= data )
  }



  cargarDatos(){
    this.route.params.subscribe((params) =>this.requestID=params['id'])
 
   
    this.lookupRequest(this.requestID);


  }



  submitForm(){
    let comment:message = {
      user:"usuario",
      content:this.commentForm.value.comment
    }
    
    console.log("COMENTARIO ", this.commentForm.value)
    this.service.sendComment(this.requestID, comment);
  }

}
