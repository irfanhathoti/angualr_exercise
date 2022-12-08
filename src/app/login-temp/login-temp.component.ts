import { Component, OnInit } from '@angular/core';
import { loginDetails } from './loginDetails';

@Component({
  selector: 'app-login-temp',
  templateUrl: './login-temp.component.html',
  styleUrls: ['./login-temp.component.css']
})
export class LoginTempComponent implements OnInit {

  LogingForm: loginDetails;


  constructor() {
    this.LogingForm = new loginDetails()

    

  }
  Login(): void {
    console.log(JSON.stringify(this.LogingForm))

  }

  ngOnInit(): void {
  }

}
