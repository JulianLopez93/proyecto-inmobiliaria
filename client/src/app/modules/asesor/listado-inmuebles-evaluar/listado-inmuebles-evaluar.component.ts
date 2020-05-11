import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { InmuebleModel } from 'src/app/models/inmueble.model';
import { Router } from '@angular/router';

declare var openConfirmationModal: any;

@Component({
  selector: 'app-listado-inmuebles-evaluar',
  templateUrl: './listado-inmuebles-evaluar.component.html',
  styleUrls: ['./listado-inmuebles-evaluar.component.css']
})
export class ListadoInmueblesEvaluarComponent implements OnInit {

  codeToRemove: String;



  constructor(private inmuService: InmuebleService, private route: Router) { }

  ngOnInit() {
    this.obtenerTodosInmuebles();
  }


  listaInmuebles:InmuebleModel[]=[];

  obtenerTodosInmuebles():void{
    this.inmuService.obtenerTodosInmuebles().subscribe(elementos =>{
      this.listaInmuebles=elementos;
    });
  }

  openConfirmation(code){
    this.codeToRemove = code;  
    openConfirmationModal();
  }

  eliminarInmueble(inmuebleId: String){
    this.inmuService.eliminarInmueble(inmuebleId).subscribe(item=>{

      console.log(item)
      this.route.navigate(['asesor/listadoinmueble'])

    })
  }




}
