import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NrmlComponent } from './nrml.component';
import { DtldComponent } from './dtld.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    DashboardComponent, 
    NrmlComponent, 
    DtldComponent
  ]
})
export class DashboardModule { }
