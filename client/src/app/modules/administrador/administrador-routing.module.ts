import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroAsesorComponent } from './registro-asesor/registro-asesor.component';


const routes: Routes = [

  {
    path:'registrosesor',
    component:RegistroAsesorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
