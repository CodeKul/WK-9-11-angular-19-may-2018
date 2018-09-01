import { HttpComponent } from './http/http/http.component';
import { TDComponent } from './forms/forms/td.component';
import { FormsComponent } from './forms/forms/forms.component';
import { DtldComponent } from './dashboard/dtld.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registratioon/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NrmlComponent } from './dashboard/nrml.component';
import { DDComponent } from './forms/forms/dd.component';

const dashRoutes: Routes = [
  { path: 'nrml', component: NrmlComponent },
  { path: 'dtld', component: DtldComponent }
]

const formsRoutes = [
  {path : 'td', component : TDComponent},
  {path : 'dd', component : DDComponent},
]
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'reg', component: RegistrationComponent },
  {
    path: 'dash/:dhNm',
    component: DashboardComponent,
    children: dashRoutes
  },
  { path: 'forms', component: FormsComponent, children : formsRoutes },
  { path : 'http', component : HttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
