import { Component, Input, OnInit, input } from '@angular/core';
import { Raket } from '../about';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutProService } from '../about-pro.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  id: any;
  product:any;
  constructor(private router:Router,private rout:ActivatedRoute,private aboutService:AboutProService
    ,private basketservice:BasketService){}
  ngOnInit(): void {
    this.id = this.rout.snapshot.paramMap.get('id');
    console.log(this.id);
    this.product=this.aboutService.getProduct(this.id);
    console.log(this.product);
  }
  details:Array<string>=["جنس گریپ","اندازه گریپ","اندازه سر"]

  Enter(){
    this.router.navigate(["/number"])
  }

  onBasket(){
    this.router.navigate(["/basket"])

  }
 addToCard(productId: any){
  console.log(productId)
    alert('محصول به سبد خرید اضافه شد')
  }
addTobasket(){
  if(this.product){
    this.basketservice.addTobasket(this.product)
    alert("محصول به سبد خرید اضافه شد")
  }
}

 

}
