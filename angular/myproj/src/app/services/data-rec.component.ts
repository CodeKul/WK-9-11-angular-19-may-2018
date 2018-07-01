import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-rec',
  template: `
    <p>
      Moved Counter is {{cntr}}
    </p>
  `,
  styles: []
})
export class DataRecComponent implements OnInit {

  cntr: number

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.onMove(cntr => this.cntr = cntr)
  }
}
