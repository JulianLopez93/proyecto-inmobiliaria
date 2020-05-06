import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearInmuebleComponent} from './crear-inmueble/crear-inmueble.component'
import { ListadoInmueblesEvaluarComponent} from './listado-inmuebles-evaluar/listado-inmuebles-evaluar.component'
import { EditarInmuebleComponent } from './editar-inmueble/editar-inmueble.component'


const routes: Routes = [
  {
    path:'crearinmueble',
    component:CrearInmuebleComponent

  }
  ,
  {
    path:'listadoinmueble',
    component:ListadoInmueblesEvaluarComponent

  },
  
  {
    path:'editarinmueble/:id',
    component:EditarInmuebleComponent
  },

  {
    path: '',
    pathMatch:'full',
    redirectTo:'/home'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
