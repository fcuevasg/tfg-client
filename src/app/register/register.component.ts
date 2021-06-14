import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RequestsService} from '../services/requests.service'
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'
import {casetaInfo} from '../interfaces/casetaInfo'
import { UserService } from '../services/user.service';

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
              private service: UserService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      CP: new FormControl(null, [Validators.required,, Validators.pattern('[0-9]{5}')]),
      apellido: new FormControl(null, [Validators.required]),
      correo: new FormControl(null, [Validators.required,Validators.email]),
      dni: new FormControl(null, [Validators.required,Validators.pattern('[0-9]{8}[A-Z]') ]),
      domicilio: new FormControl(null, [Validators.required]),
      id: '',
      nombre: new FormControl(null, [Validators.required]),
      provincia:new FormControl(null, [Validators.required]),
      telefono: new FormControl(null, [Validators.required,Validators.pattern('[0-9]{9}')])
   })
 
  }
onSubmit(){
  //this.route.params.subscribe((data)=> this.service.createRequest( data))
  if(this.registerForm.valid){
    this.service.register(this.registerForm.value);
    this.registerForm.reset();
}
}

}


