import { Injectable } from '@angular/core';
import { Raket } from './about';
import { Aboutbasket } from './aboutbasket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }
  basket:Aboutbasket[]=[]



  addTobasket(raket:Aboutbasket){
    this.basket.push(raket)
  }

  getBasketItem():Aboutbasket[]{
    return this.basket
  }
}
