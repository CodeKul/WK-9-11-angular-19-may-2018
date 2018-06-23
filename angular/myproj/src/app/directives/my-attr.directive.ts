import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[myAtt]'
})
export class MyAttrDirective {

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
