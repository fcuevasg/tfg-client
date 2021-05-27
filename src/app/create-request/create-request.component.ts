import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RequestsService} from '../services/requests.service'
import {FormBuilder,FormControl,FormGroup} from '@angular/forms'
import {casetaInfo} from '../interfaces/casetaInfo'



@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent implements OnInit {


  requestID:string;
  private sub:any;
  requestData:casetaInfo;
  requestForm:FormGroup;

  constructor(private route:ActivatedRoute,
              private service: RequestsService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

 this.requestForm = this.fb.group({
   name:'',
   cif:'',
   cp:'',
   dSocial: '',
   info:this.fb.group({
    CP: '',
    apellido: '',
    correo: '',
    dni: '',
    domicilio: '',
    id: '',
    nombre: '',
    provincia:'',
    telefono: '',
   }),
   modality: '',
   surface:'',
   telefonos:'',

 })
 
  }
onSubmit(){
  //this.route.params.subscribe((data)=> this.service.createRequest( data))
    this.service.createRequest(this.requestForm.value);
    this.requestForm.reset();
}


}
