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
   name:[null, [Validators.required]],
   cif:[null, [Validators.required]],
   cp:[null, [Validators.required]],
   dSocial: [null, [Validators.required]],
   info:this.fb.group({
    CP: [null, [Validators.required]],
    apellido: [null, [Validators.required]],
    correo: [null, [Validators.required]],
    dni: [null, [Validators.required]],
    domicilio: [null, [Validators.required]],
    id: [null, [Validators.required]],
    nombre: [null, [Validators.required]],
    provincia:[null, [Validators.required]],
    telefono: [null, [Validators.required]],
   }),
   modality: [null, [Validators.required]],
   surface:[null, [Validators.required]],
   telefonos:[null, [Validators.required]],

 })
 
  }
onSubmit(){

  //this.route.params.subscribe((data)=> this.service.createRequest( data))
  console.log(this.requestForm.get("modality"))
    this.service.createRequest(this.requestForm.value);
    this.requestForm.reset();
}

onChange(aa){
  console.log(aa)

}
}
