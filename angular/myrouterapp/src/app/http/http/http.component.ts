import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyObservable } from './obs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {

  private sub: Subscription
  plNm : string

  constructor(
    private obs: MyObservable
  ) { }

  ngOnInit() {
    this.sub = this.obs.processing().subscribe(
      num => console.log(`This is number ${num}`),
      err => console.log(err),
      () => console.log(`Completed`)
    )
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  onBtn(cty: string) {
    // this.obs.cityInfo(cty).subscribe(
    //   res => console.log(res),
    //   err => console.log(err),
    //   () => console.log(`Complete`)
    // )

    this.obs.onlinePlayers().subscribe(
      res => {
        let rt = res as RootObject
        console.log(rt)
        this.plNm = rt.ps3.label
      }
    )
  }
}
