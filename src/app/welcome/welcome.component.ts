import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  searchForm: FormGroup;
  route: ActivatedRoute
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.searchForm  = this.fb.group({
      requestNumber: ''
    })
    this.contactForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      Comentario: ['',[Validators.required,Validators.maxLength(150)]]
    })

 //   this.searchForm.valueChanges.subscribe(console.log)

  }


  submitSearchRequest(data){
    this.router.navigate(['/requests',data]);
 
  }

  onSubmit(){
    
  }
  
}
