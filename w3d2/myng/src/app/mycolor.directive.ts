import { Directive, ElementRef, Renderer, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  colors : string[] = ['red', 'green', 'blue', 'gray']

  constructor(private e: ElementRef, private r: Renderer) { 

   }

   @HostListener('click') bar(){ 
     var c = this.getColor();
     const hostElem = this.e.nativeElement;

     hostElem.style.color = c; 

     console.dir(hostElem.parentNode.parentNode.children[0]);

     hostElem.parentNode.parentNode.children[0].innerHTML = c
  }

   getColor(){
        return this.colors[Math.floor(Math.random()*this.colors.length)];
   }
}
