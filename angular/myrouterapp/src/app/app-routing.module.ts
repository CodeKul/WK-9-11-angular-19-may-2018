import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registratioon/registration.component';

const routes: Routes = [
  {path:'', component :LoginComponent},
  {path:'reg', component : RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
