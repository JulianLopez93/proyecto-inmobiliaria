import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

//Enrutamos login y logout al modulo de security que a su vez los enrutará al modulo principal
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo:'/login'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
