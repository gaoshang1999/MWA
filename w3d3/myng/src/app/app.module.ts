import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { myRoutes } from "./app.routes";

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './profile/profile.component';
import { DbService } from './db.service';

import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    myRoutes // add it to imports
  ],
  providers: [DbService, MyCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
