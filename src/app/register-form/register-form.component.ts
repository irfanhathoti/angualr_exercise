import { Component, OnInit } from '@angular/core';
import { registerData } from './registerData';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm:registerData

  constructor() { 
    this.registerForm = new registerData()
  }


  handleSubmit():void{
    console.log( JSON.stringify(this.registerForm) )
  }

 

  ngOnInit(): void {
  }

}
