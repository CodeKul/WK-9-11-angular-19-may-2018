import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  // providers: [DataService]
})
export class ServicesComponent implements OnInit {

  cntr : number

  constructor(
    private data : DataService
  ) { }

  ngOnInit() {
  }

  incCntr() {
    this.cntr = this.data.moveCntr()
  }
}
