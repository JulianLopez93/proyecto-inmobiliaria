import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { RegistroComponent  } from './registro/registro.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { ListarSolicitudComponent } from './listar-solicitud/listar-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';


@NgModule({
  declarations: [RegistroComponent, CrearSolicitudComponent, ListarSolicitudComponent, EditarSolicitudComponent ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
