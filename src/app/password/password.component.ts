import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  constructor(public phoneservice:PhoneService,  private router:Router){
    this.user= this.phoneservice.userphone
  }

  user:string=""
  
  onSubmit(){}
  goBack(){
    this.router.navigate(["/number"])
  }

}
