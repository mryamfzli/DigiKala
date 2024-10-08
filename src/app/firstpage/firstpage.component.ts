import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutProService } from '../about-pro.service';
import { Raket } from '../about';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css'
})
export class FirstpageComponent implements OnInit {

  raketList:Raket[]=[];

  constructor( private router:Router,private aboutService:AboutProService){}
  ngOnInit(): void {
    this.raketList=this.aboutService.raketList;
  }
  
  

  Enter(){
    this.router.navigate(["/number"])
  }

  onProduct(raket:Raket){
    this.router.navigate(["/product/"+raket.id])
  }

  onBasket(){
    this.router.navigate(["/basket"])
  }

}
