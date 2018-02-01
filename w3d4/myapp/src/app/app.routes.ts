import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
 

const MY_ROUTES: Routes = [
     { path: '', component: AppComponent },
     { path: 'thankyou', component: ThankyouComponent }     
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
