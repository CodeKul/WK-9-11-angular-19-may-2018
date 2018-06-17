import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hdr',
  template: `
    <h1 [style.color]="cl"> Welcome to codekul </h1>  
  `,
  styles: []
})
export class HdrComponent implements OnInit {

  @Input()
  cl : string

  constructor() { }

  ngOnInit() {
  }
}
