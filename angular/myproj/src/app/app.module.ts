import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeAlertComponent } from './code-alert/code-alert.component';
import { JumboComponent } from './code-alert/jumbo.component';
import { DatabindingComponent } from './databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeAlertComponent,
    JumboComponent,
    DatabindingComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
