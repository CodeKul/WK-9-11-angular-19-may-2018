import { Component, OnInit, ElementRef, ViewChild, Renderer2, ContentChild } from '@angular/core';

@Component({
  selector: 'app-locl-refs',
  templateUrl: './locl-refs.component.html',
  styleUrls: ['./locl-refs.component.css']
})
export class LoclRefsComponent implements OnInit {

  @ViewChild('nm')
  nmEl : ElementRef

  @ContentChild('jmb')
  myJmb : ElementRef

  nmTxt : string

  constructor() { }

  ngOnInit() {
  }

  onBtn(nm : string){
    //this.nmTxt = nm
    this.nmTxt = this.nmEl.nativeElement.value
    this.nmEl.nativeElement.style.border = '1px solid red'
  }
}
