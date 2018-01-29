import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  outputs:['counterChange'],
  template: `
            <button (click) = "decrease()">-</button>
            {{counterValue}} 
            <button (click) = "increase()">+</button>
            `,
  styleUrls: ['./counter.component.css']
})


export class CounterComponent implements OnInit {
  @Input('counter') counterValue : number;
  counterChange : EventEmitter<number>;
  constructor() { 
    this.counterValue = 0
    this.counterChange = new EventEmitter();
  }

  decrease() {
    this.counterValue  -= 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  increase() {
    this.counterValue  += 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  ngOnInit() {
    this.counterChange.emit(this.counterValue);
  }

}
