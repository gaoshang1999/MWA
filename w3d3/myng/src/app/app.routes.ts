import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from './homepage/homepage.component';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
 

const MY_ROUTES: Routes = [
     { path: '', component: HomepageComponent },
     { path: 'students', component: StudentsComponent },

     { path: 'profile/:id', component: ProfileComponent , canActivate:[MyCanActivateGuard] },

     { path: 'error', component: ErrorComponent },
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
