import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { InmuebleModel } from 'src/app/models/inmueble.model';
import { SolicitudModel } from 'src/app/models/solicitud.model'
import { SolicitudService } from 'src/app/services/solicitud.service'

declare var openPlatformModalMessage:any;
declare var initMaterializeSelect: any;

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  formValidator:FormGroup;
  formValidator2:FormGroup;

  listaInmuebles:InmuebleModel[]=[];
  bandera:boolean=false;
  tipoS:String=null;
  tipoI:String=null;
 
  date:Date=new Date();

  constructor(private inmuService:InmuebleService, 
    private solService:SolicitudService,
    private fb:FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.formGenerator();
  }

  
  get fv(){
    return this.formValidator.controls;
  }

  get fv2(){
    return this.formValidator2.controls;
  }


  formGenerator() 
  {
    
    this.formValidator = this.fb.group({

      tipoSolicitud: ['', [Validators.required]],
      tipoInmueble: ['', [Validators.required]],
     

    });

    this.formValidator2= this.fb.group({
      
      
      inmueble: ['', [Validators.required]],

    })
  }

  guardarNuevaSolicitud():void
  {
    if (this.formValidator.invalid) 
    {
      openPlatformModalMessage("El formulario es inválido!")
    } 
    else 
    {
      console.log(this.date)
      
      let s:SolicitudModel={
      
      id:null,
      idCliente: "csacsas",
      inmueble: this.fv2.inmueble.value,
      estado: "proceso",
      fecha: this.date,
      comentarios: ["fssdcdsvg"],
      idCodeudor: "fsdvsdvd",
      tipoSolicitud: this.fv.tipoSolicitud.value,
      tipoInmueble: this.fv.tipoInmueble.value,
      fotoInmueble: "fsdnsdv",
      }
      console.log(s)

      this.solService.crearNuevaSolicitud(s).subscribe(item=>{
            
        alert("Solicitud guardada exitosamente")
        this.router.navigate(['/cliente/listarsolicitud'])
      });

    }
  }

  filtrarInmuebles()
  {

    this.tipoS=this.fv.tipoSolicitud.value
    this.tipoI=this.fv.tipoInmueble.value

    this.inmuService.filtrarInmueblesPorOfertaTipo(this.tipoS,this.tipoI).subscribe(items=>{
      this.listaInmuebles=items;
    
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
