import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { casetaInfo } from '../interfaces/casetaInfo';
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
    private service: RequestsService) { }

  ngOnInit(): void {

    //TODO el nombre de la caseta es la ID
    this.casetas = [];
    this.service.getRequestByUser("user").subscribe(data=>{
      this.casetas= data;  
      console.log(this.casetas);
      this.size = this.casetas.length;
    })
  

  

  }




  showInfo(url){
    console.log(url);
    this.router.navigate(["requests",url.name])
  }
}
