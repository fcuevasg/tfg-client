import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-primary-toolbar',
  templateUrl: './primary-toolbar.component.html',
  styleUrls: ['./primary-toolbar.component.scss']
})
export class PrimaryToolbarComponent implements OnInit {

  conected:boolean;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void { 
    


  }
  isConected(){
    
   this.conected = this.authService.logIn;

  }
  closeSesion() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

}
