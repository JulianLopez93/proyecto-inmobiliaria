import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { MiViComponent } from './public/QuienesSomos/mi-vi/mi-vi.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'MiVi',
    component:MiViComponent
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo:'/home'
  },
 
  {
    path:'security',
    loadChildren:'./modules/security/security.module#SecurityModule'
  },
  {
    path:'admin',
    loadChildren:'./modules/administrador/administrador.module#AdministradorModule'
  },
  {
    path:'cliente',
    loadChildren:'./modules/cliente/cliente.module#ClienteModule'
  },

  {
    path:'asesor',
    loadChildren:'./modules/asesor/asesor.module#AsesorModule'
  },
  
  {
    path:'**',
    component:PageNotFoundComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
