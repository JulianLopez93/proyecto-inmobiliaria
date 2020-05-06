import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { InmuebleModel } from 'src/app/models/inmueble.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var openPlatformModalMessage:any;
declare var initMaterializeSelect: any;

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css']
})
export class EditarInmuebleComponent implements OnInit {

 

  constructor(private inmuebleService:InmuebleService, private router:Router, private route:ActivatedRoute
    ) { }

  inmueble:InmuebleModel = {
        id:null,
        codigo:null,
        departamento: null,
        ciudad: null, 
        direccion: null,
        valor: null,
        tipo: null,
        tipooferta: null,
        estadoContrato: false,
        idEncargado:null,
        telEncargado: null,
        fotos: [null],
        //nombre:"dasergsvf",
        enlaceVideo:null
  };

  ngOnInit() {
    this.buscarInmueble();
  }

 
  buscarInmueble():void{
    let id = this.route.snapshot.params["id"];
    this.inmuebleService.obtenerInmueblePorId(id).subscribe(item=>{
    
      this.inmueble=item;

    })
  }

  actualizarInmueble(){
    this.inmuebleService.actualizarInmueble(this.inmueble).subscribe(item=>{

    
      alert("Este inmueble se actualizó exitosamente")
      this.router.navigate(["/asesor/listadoinmueble"])


    })
  }

}
