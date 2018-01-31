import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-students',
  template: `
    <ul>
            <li *ngFor="let item of items"> <a href="/profile/{{item._id}}"> {{item.name}} </a> </li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./students.component.css'],

})
export class StudentsComponent implements OnInit {
  items = [];

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.items = this.dbService.getData();
    console.log(this.items[0].name);
  } 

}
