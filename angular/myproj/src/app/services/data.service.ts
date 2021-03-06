import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cntr: number = 0
  private cntrEm: EventEmitter<number>

  constructor() {
    this.cntrEm = new EventEmitter()
  }

  moveCntr() {
    this.cntr++
    this.cntrEm.emit(this.cntr)
    return this.cntr
  }

  onMove(cb: (cntr: number) => void) {
    this.cntrEm.subscribe(function (cntr) {
      cb(cntr)
    })
  }
}
