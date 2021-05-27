import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RequestsService} from '../services/requests.service'
import {FormBuilder,FormControl,FormGroup} from '@angular/forms'
import {casetaInfo} from '../interfaces/casetaInfo'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  requestID:string;
  private sub:any;
  requestData:casetaInfo;
  registerForm:FormGroup;

  constructor(private route:ActivatedRoute,
              private service: RequestsService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
    CP: '',
    apellido: '',
    correo: '',
    dni: '',
    domicilio: '',
    id: '',
    nombre: '',
    provincia:'',
    telefono: '',
   })
 
  }
onSubmit(){
  //this.route.params.subscribe((data)=> this.service.createRequest( data))
    this.service.createRequest(this.registerForm.value);
    this.registerForm.reset();
}


}


