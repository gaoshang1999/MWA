import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyliComponent } from './myli/myli.component';
import { UpperDirective } from './upper.directive';
import { MyvisibliityDirective } from './myvisibliity.directive';
import { MycolorDirective } from './mycolor.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyliComponent,
    UpperDirective,
    MyvisibliityDirective,
    MycolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
