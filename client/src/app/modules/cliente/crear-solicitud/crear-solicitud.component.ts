import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { InmuebleModel } from 'src/app/models/inmueble.model';
import { SolicitudModel } from 'src/app/models/solicitud.model'

declare var openPlatformModalMessage:any;
declare var initMaterializeSelect: any;

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  formValidator:FormGroup;

  constructor(private inmuService:InmuebleService,
    private fb:FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.formGenerator();
  }

  listaInmuebles:InmuebleModel[]=[];
  bandera:boolean=false;
  tipoS:String=null;
  tipoI:String=null;

  get fv(){
    return this.formValidator.controls;
  }

  formGenerator() 
  {
    
    this.formValidator = this.fb.group({

      tipoSolicitud: ['', [Validators.required]],
      tipoInmueble: ['', [Validators.required]],
      codInmueble: ['', [Validators.required]],

    });

  }

  filtrarInmuebles(){

    this.tipoS=this.fv.tipoSolicitud.value
    this.tipoI=this.fv.tipoInmueble.value

    this.inmuService.filtrarInmueblesPorOfertaTipo(this.tipoS,this.tipoI).subscribe(items=>{
      this.listaInmuebles=items;
      console.log(this.listaInmuebles)
      console.log(this.tipoS)
      console.log(this.tipoI)
      if (this.listaInmuebles!=null)
        {
          this.bandera=true;
        }
      else{
        alert("No hay inmuebles disponibles")
      }
    });

  }

  

}
