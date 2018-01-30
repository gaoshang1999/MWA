import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-myli',
  template: `
  <div>
    color : <span> black </span>
    <ul myvisibliity show="1">
      <li  *ngFor="let name of names" upper mycolor > {{ name }} </li>
    </ul>
  </div>`,
  styleUrls: ['./myli.component.css']
})

export class MyliComponent implements OnInit {
   @Input() input : string; 
   names : string[]; 

  constructor() {
     this.names = [];
   }

  ngOnInit() {
    this.names = this.input.split(",");
  }

}
