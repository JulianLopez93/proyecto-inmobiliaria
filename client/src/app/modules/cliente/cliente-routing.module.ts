import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component'
import { ListarSolicitudComponent } from './listar-solicitud/listar-solicitud.component'
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component'



const routes: Routes = [
  
{
  path:'registro',
  component:RegistroComponent
}
,
{
  path:'crearsolicitud',
  component:CrearSolicitudComponent
}
,
{
  path:'listarsolicitud',
  component:ListarSolicitudComponent
}
,
{
  path:'editarsolicitud',
  component:EditarSolicitudComponent
}
,
{
  path: '',
  pathMatch:'full',
  redirectTo:'/home'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
