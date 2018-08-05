import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dhNm : string
  tm : number

  constructor(
    private actRt : ActivatedRoute
  ) { }

  ngOnInit() {
    //console.log(this.actRt)

    this.actRt.queryParams.subscribe(
      qryPrm => this.tm = qryPrm['tm'] 
    )
    this.actRt.params.subscribe(
      prm => this.dhNm = prm['dhNm']
    )
  }
}
