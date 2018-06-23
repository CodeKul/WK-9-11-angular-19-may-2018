import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'welcome to codekul';
  tgl = false

  @ViewChild('jmb')
  myJmb : ElementRef

  myClk() {
    this.tgl = !this.tgl
  }
}
