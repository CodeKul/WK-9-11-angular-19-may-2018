import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myAtt]'
})
export class MyAttrDirective {

  @Input('myAtt')
  @HostBinding('style.width')
  wdt : string

  constructor() { }

  @HostListener('mouseenter')
  onMsIn() {
    this.wdt = `350px`
  }

  @HostListener('mouseleave')
  onMsOut() {
    this.wdt = `250px`
  }
}
