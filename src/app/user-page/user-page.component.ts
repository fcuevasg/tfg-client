import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { casetaInfo } from '../interfaces/casetaInfo';
import { AuthService } from '../services/auth.service';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {



   casetas:casetaInfo[];
   size:number;
   

  constructor(
    private router:Router,
    private service: RequestsService,
    private authService:AuthService) { }

  ngOnInit(): void {

    //TODO el nombre de la caseta es la ID
    this.casetas = [];
    this.service.getRequestByUser(this.authService.usr).subscribe(data=>{
      this.casetas= data;  
      console.log(this.casetas);
      this.size = this.casetas.length;
    })
  

  

  }

  logout(){
    this.authService.logout();
    this.router.navigate(["/"])

  }


  showInfo(url){
    console.log(url);
    this.router.navigate(["requests",url.name])
  }

  goBack() {
    this.router.navigate(["/"])
  }
}
