import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <div> <h3>We are taking rating for {{ttl}}</h3>  </div>
    <div class="row">
      <div class="col-md-12">
        <button (click)="inClk(1)" type="button" class="btn btn-primary">Primary</button>
        <button (click)="inClk(2)" type="button" class="btn btn-secondary">Secondary</button>
        <button (click)="inClk(3)" type="button" class="btn btn-success">Success</button>
        <button (click)="inClk(4)" type="button" class="btn btn-danger">Danger</button>
        <button (click)="inClk(5)" type="button" class="btn btn-warning">Warning</button>
      </div>
    </div>
  `,
  styles: []
})
export class RatingComponent implements OnInit {

  @Input()
  ttl: string;

  @Output()
  stClk: EventEmitter<number>

  constructor() {
    this.stClk = new EventEmitter()
  }

  ngOnInit() {
  }

  inClk(num: number) {
    switch (num) {
      case 1:
        this.stClk.emit(0.5)
        break;

      case 2:
        this.stClk.emit(1)
        break;

      case 3:
        this.stClk.emit(1.5)
        break;

      case 4:
      this.stClk.emit(2)
        break;

      case 5:
      this.stClk.emit(2.5)
        break;

      default:
        break;
    }
  }
}
