import { MyFormsModule } from './forms/forms.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { RegistratioonModule } from './registratioon/registratioon.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    LoginModule,
    RegistratioonModule,
    DashboardModule,
    MyFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
