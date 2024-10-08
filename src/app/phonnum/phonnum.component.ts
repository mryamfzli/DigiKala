import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phonnum',
  templateUrl: './phonnum.component.html',
  styleUrl: './phonnum.component.css'
})
export class PhonnumComponent {

  constructor(public phoneservice:PhoneService,  private router:Router){}
  phoneNumber:string=""



  onSubmit(){
    
    this.router.navigate(["/userPassword"])
    this.phoneservice.userphone=this.phoneNumber
  }

}
