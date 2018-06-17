import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mkr',
  template: `
    <input type="text" [(ngModel)]="cl" (ngModelChange)="onInpCh()">
  `,
  styles: []
})
export class MkrComponent implements OnInit {

  @Output()
  mkCl: EventEmitter<string>

  cl: string

  constructor() {
    this.mkCl = new EventEmitter()
   }

  ngOnInit() {
  }
  onInpCh() {
    console.log(this.cl)
    this.mkCl.emit(this.cl)
  }
}
