import { Directive, ElementRef, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class MyStrDirective implements OnInit{

  @Input('unless')
  cnd : boolean

  constructor(
    private vcRef : ViewContainerRef,
    private tmRef : TemplateRef<any>
  ) { }

  ngOnInit() {
    if(!this.cnd){
      this.vcRef.createEmbeddedView(this.tmRef)
    }else {
      this.vcRef.clear()
    }
  }
}
