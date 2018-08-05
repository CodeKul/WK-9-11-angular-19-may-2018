import { DtldComponent } from './dashboard/dtld.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registratioon/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NrmlComponent } from './dashboard/nrml.component';

const dashRoutes: Routes = [
  { path: 'nrml', component: NrmlComponent },
  { path: 'dtld', component: DtldComponent }
]
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'reg', component: RegistrationComponent },
  { 
    path: 'dash/:dhNm', 
    component: DashboardComponent, 
    children: dashRoutes 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
