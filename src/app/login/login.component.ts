import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from '../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  


  constructor(
    private fb:FormBuilder,
    private service:UserService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario:[null,[Validators.required]],
      contraseña:[null,[Validators.required]]
    })

  }



  onSubmit(){
    this.service.login(this.loginForm.value);    


  }
}
