import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { DbService } from '../db.service';

@Component({
  selector: 'app-profile',
  template: `
   name: {{student.name}}<br/>
   stuID: {{student.stuID}}<br/> 
   email: {{student.email}}`,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private subscription: Subscription;
  id: string;

  student ; 

  constructor(private activatedRoute: ActivatedRoute, private dbService: DbService) {
      // params will return an Observable
      // we need it so we track changes in parameters as this code will be run once at constructor
      this.subscription = activatedRoute.params.subscribe(
              (param: any) => {this.id = param['id'];
              this.student = dbService.getItem(this.id);
          });
    
  }

  ngOnInit() {
  }

}
