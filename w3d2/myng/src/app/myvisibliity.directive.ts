import { Directive , ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[myvisibliity]'
})
export class MyvisibliityDirective {

  @Input('show') show : number 

  constructor(private e: ElementRef, private r: Renderer) { 
  }


  ngOnInit(){  
     console.log(this.show)
     if(this.show){
        this.r.setElementStyle(this.e.nativeElement, 'visibility', 'visible')
    } else{
        this.r.setElementStyle(this.e.nativeElement, 'visibility', 'hidden')
    }
  }
}

