import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {


  eventForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.pattern('^[a-z0-9-.]+@(?=.*htcindia)([a-z])+\.[a-z]{2,3}$')])],
      password: ["", Validators.compose([Validators.required, Validators.pattern('^(?=.*[A-Za-z])[A-Za-z\d\S]{10,30}$')])],
      address: this.formBuilder.array([

      ]),
    });

  }



  get address(): FormArray {
    return this.eventForm.get("address") as FormArray
  }



  newAddress(): FormGroup {
    return this.formBuilder.group({
      address: ['', Validators.required],
      pincode: '',
    })
  }
  addAddress() {
    this.address.push(this.newAddress());
  }
  
  removeAddress(i: number) {
    this.address.removeAt(i);
  }

  onSubmit() {
    console.log(this.eventForm.value);
  }

  ngOnInit(): void {
  }

}
