import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { RegistroAsesorComponent } from './registro-asesor/registro-asesor.component';


@NgModule({
  declarations: [RegistroAsesorComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormsModule, 
    ReactiveFormsModule
    

  ]
})
export class AdministradorModule { }
