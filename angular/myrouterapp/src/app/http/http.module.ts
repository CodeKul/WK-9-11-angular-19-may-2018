import { MyObservable } from './http/obs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { HttpComponent } from './http/http.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [HttpComponent],
  providers: [MyObservable]
})
export class MyHttpModule { }
