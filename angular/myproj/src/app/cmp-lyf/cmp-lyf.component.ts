import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  Input
} from '@angular/core';

@Component({
  selector: 'app-cmp-lyf',
  templateUrl: './cmp-lyf.component.html',
  styleUrls: ['./cmp-lyf.component.css']
})
export class CmpLyfComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  myIp : string
  
  constructor() { }

  ngOnInit() {

    console.log(`ngOnInit`)
  }

  ngOnChanges(sm: SimpleChanges) {
    console.log(`ngOnChanges`)
    console.log(sm)

  }

  ngDoCheck(): void {
    console.log(`ngDoCheck`)
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit`)
  }
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked`)
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit`)
  }
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked`)
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy`)
  }
}
