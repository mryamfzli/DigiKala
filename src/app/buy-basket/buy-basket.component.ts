import { Component } from '@angular/core';
import { Raket } from '../about';
import { BasketService } from '../basket.service';
import { Aboutbasket } from '../aboutbasket';

@Component({
  selector: 'app-buy-basket',
  templateUrl: './buy-basket.component.html',
  styleUrl: './buy-basket.component.css'
})
export class BuyBasketComponent {


  basketItem:Raket[]=[]

  constructor(private basketservice:BasketService){
    
  }

  

}
