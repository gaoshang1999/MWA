import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { DbService } from '../db.service';
@Injectable()
export class MyCanActivateGuard implements CanActivate {
   
  constructor(private router: Router, private dbService: DbService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.dir(route);    
    let id = route.params['id']
    console.dir(id);

    if( !id ||  ! this.dbService.valid_id(id)) {
      this.router.navigate(['error']);
      
      return false;
    }
    return true;
  }
}
