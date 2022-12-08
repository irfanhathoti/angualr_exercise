import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendenceComponent } from './attendence/attendence.component';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { LoginTempComponent } from './login-temp/login-temp.component';
import {InputTextModule} from 'primeng/inputtext';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterDetailDirective } from './register-form/register-detail.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';
import { ParentComponent } from './parent-child/parent.component';
import { ChildComponent } from './parent-child/child.component';
import { CategoryfilterPipe } from './categoryfilter.pipe';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [
    AppComponent,
    AttendenceComponent,
    LoginTempComponent,
    RegisterFormComponent,
    RegisterDetailDirective,
    ReactiveFormComponent,
    FormArrayComponent,
    ParentComponent,
    ChildComponent,
    CategoryfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    DropdownModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
