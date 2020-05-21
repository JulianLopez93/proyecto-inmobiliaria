import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { InmuebleModel } from 'src/app/models/inmueble.model';

declare var openPlatformModalMessage:any;
declare var initMaterializeSelect: any;

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {
  formValidator:FormGroup;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private inmuebleservice: InmuebleService) { }


  ngOnInit() {
    this.formGenerator();
  }

  get fv(){
    return this.formValidator.controls;
  }

  formGenerator() {
    this.formValidator = this.fb.group({

      codigo: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      direccion:['',[Validators.required, Validators.minLength(5)]],
      valor:['',[Validators.required, Validators.minLength(6), Validators.maxLength(11)]],
      tipo:['',[Validators.required]],
      tipooferta:['',[Validators.required]],
      telEncargado:['',[Validators.required, Validators.minLength(8)]]
      //fotografia:['',[Validators.required]]
      
    });

  }
  


  guardarNuevoInmueble():void
  {
    console.log(this.fv);

    if (this.formValidator.invalid) 
    {
      openPlatformModalMessage("El formulario es inválido!")
    } else 

    {
      let c: InmuebleModel = {
        id:null,
        codigo:this.fv.codigo.value,
        departamento: this.fv.departamento.value,
        ciudad: this.fv.ciudad.value,
        direccion: this.fv.direccion.value,
        valor: this.fv.valor.value,
        tipo: this.fv.tipo.value,
        tipooferta: this.fv.tipooferta.value,
        estadoContrato:false,
        idEncargado:"sscddfvddsc",
        telEncargado: this.fv.telEncargado.value,
        fotos: ["image.jpg"],
        //nombre:"dasergsvf",
        enlaceVideo:"hsdkfdvf.com"


      }

      this.inmuebleservice.guardarNuevoInmueble(c).subscribe(data=>{

          alert("Inmueble guardado exitosamente")
          this.router.navigate(['/asesor/listadoinmueble'])
        
      });
    }
  }
}

  


