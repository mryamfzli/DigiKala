import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent } from './password/password.component';
import { PhonnumComponent } from './phonnum/phonnum.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ProductComponent } from './product/product.component';
import { BuyBasketComponent } from './buy-basket/buy-basket.component';








const routes: Routes = [
  {path:"digiKala" , component:FirstpageComponent},
  {path:"number",component:PhonnumComponent},
  {path:"userPassword" , component:PasswordComponent},
  {path:"product/:id",component:ProductComponent},
  {path:"basket",component:BuyBasketComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
