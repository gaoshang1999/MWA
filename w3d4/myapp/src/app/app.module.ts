import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
// use ReactiveFormsModule Only when using Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import {  FormBuilder } from "@angular/forms";
import { ThankyouComponent } from './thankyou/thankyou.component';
import { myRoutes } from "./app.routes";

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    myRoutes, // add it to imports,
    HttpClientModule
  ],
  providers: [FormBuilder, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
