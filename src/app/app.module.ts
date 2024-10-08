import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { PhonnumComponent } from './phonnum/phonnum.component';
import { FormsModule } from '@angular/forms';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ProductComponent } from './product/product.component';
import { BuyBasketComponent } from './buy-basket/buy-basket.component';


@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    PhonnumComponent,
    FirstpageComponent,
    ProductComponent,
    BuyBasketComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
