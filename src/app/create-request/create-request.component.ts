import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RequestsService} from '../services/requests.service'
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'
import {casetaInfo, modalidades} from '../interfaces/casetaInfo'



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
  mod;
  modalidad;
  selected:any;
  constructor(private route:ActivatedRoute,
              private service: RequestsService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.mod = [];
    this.mod.push({nombre:modalidades.COM,value:"test1"})
    this.mod.push({nombre:modalidades.EOP,value:"test2"})
    this.mod.push({nombre:modalidades.JUV,value:"test3"})
    this.mod.push({nombre:modalidades.SOLO,value:"test4"})

 this.requestForm = this.fb.group({
   name: new FormControl(null, [Validators.required,]),
   cif:new FormControl(null, [Validators.required]),
   cp:new FormControl(null, [Validators.required, Validators.pattern('[0-9]{5}')]),
   dSocial: new FormControl(null, [Validators.required]),
   info:this.fb.group({
    CP: new FormControl(null, [Validators.required,, Validators.pattern('[0-9]{5}')]),
    apellido: new FormControl(null, [Validators.required]),
    correo: new FormControl(null, [Validators.required,Validators.email]),
    dni: new FormControl(null, [Validators.required,Validators.pattern('[0-9]{8}[A-Z]') ]),
    domicilio: new FormControl(null, [Validators.required]),
    id: '',
    nombre: new FormControl(null, [Validators.required]),
    provincia:new FormControl(null, [Validators.required]),
    telefono: new FormControl(null, [Validators.required,Validators.pattern('[0-9]{9}')])
   }),
   modality: new FormControl(null, [Validators.required]),
   surface:new FormControl(null, [Validators.required, Validators.pattern("[0-9]{1,2}")]),
   telefonos:new FormControl(null, [Validators.required,Validators.pattern('[0-9]{9}')]),

 })
 
  }
onSubmit(){

  //this.route.params.subscribe((data)=> this.service.createRequest( data))
  console.log(this.requestForm.valid)
  if(this.requestForm.valid){
    this.service.createRequest(this.requestForm.value);
    this.requestForm.reset();
  }
   
}
}
