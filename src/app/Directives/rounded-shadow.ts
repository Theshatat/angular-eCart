import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRoundedShadow]',
  standalone:true
})
export class RoundedShadow {

  @Input('appRoundedShadow') defaultColor ="black";

  constructor(private ele:ElementRef) {
    ele.nativeElement.style.borderRadius = "10px";
    ele.nativeElement.style.boxShadow = '0 0 10px gray';
  }
  @HostListener('mouseover')over(){
    this.ele.nativeElement.style.boxShadow = '0 0 20px gray';
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseout')out(){
    this.ele.nativeElement.style.boxShadow = '0 0 10px gray';
  }
  
}
