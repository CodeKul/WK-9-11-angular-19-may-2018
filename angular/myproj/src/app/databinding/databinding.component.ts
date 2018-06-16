import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  wht = 'interpolation binding'
  ty = 'text'
  tgl = false
  myNm = ''

  constructor() { }

  ngOnInit() {
  }

  whtIs() {
    return this.wht
  }

  clkM() {
    console.log(`Changed by click`)
  }

  onStrClk(rt : number) {
    console.log(`Rating is ${rt}`)
  }
}
