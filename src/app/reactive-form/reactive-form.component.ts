import { Component } from '@angular/core';
import { AbstractControl, Validators, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  contactForm: FormGroup;
  designations: string[];

  constructor(private formBuilder: FormBuilder) { //dependency Injection.
    this.contactForm = this.createForm();
    this.designations = ["IT Manager", "Purchase Manager", "Admin"];

  }

  createForm(): FormGroup {
    return this.contactForm = this.formBuilder.group({
      'contactName': ["", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      'designation': ["", Validators.compose([Validators.required, chooseDesignation])],
      'organization': ["", Validators.required],
      'city': ["", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z',.\s-]{1,25}$")])],
      'email': ["", Validators.compose([Validators.required, Validators.pattern("^[A-Za-z_.]{3,}@[.htcindia]{8,}[.]{1}[com]{3,6}")])],
      'mobile': ["", Validators.compose([Validators.required, Validators.pattern("^[0-9]{10}$")])]
    });
  }

  addContact(): void {
    console.log(JSON.stringify(this.contactForm.value));
  }
}

export function chooseDesignation(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  if (control.value == "--Choose--")
    return { "chooseJob": true };
  return null;
}