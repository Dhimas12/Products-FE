import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Hover]'
})

export class HoverDirective {
  @Input('Hover') hoverClass:string = "active";
  @Input('hover-rm') hoverClassRm:string = "";
  classesToAdd:string[] = [];
  classesToRm:string[] = [];

  constructor(private element:ElementRef) {
    console.log("working")
   }

  @HostListener('mouseenter') onMouseEnter(){
    if(this.hoverClass.trim() != "")
    this.classesToAdd = this.hoverClass.trim().split(" ");

    if(this.hoverClassRm.trim() != "")
    this.classesToRm = this.hoverClassRm.trim().split(" ");

    this.element.nativeElement.classList.add(...this.classesToAdd);
    this.element.nativeElement.classList.remove(...this.classesToRm);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.classList.remove(...this.classesToAdd);
    this.element.nativeElement.classList.add(...this.classesToRm);

    this.classesToAdd = [];
    this.classesToRm = [];
  }
}
