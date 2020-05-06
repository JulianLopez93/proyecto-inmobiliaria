import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-asesor',
  templateUrl: './registro-asesor.component.html',
  styleUrls: ['./registro-asesor.component.css']
})
export class RegistroAsesorComponent implements OnInit {
  formValidator:FormGroup;
  constructor(private fb:FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.formGenerator();
  }
 
  get fv(){
    return this.formValidator.controls;
  }

  
  formGenerator() {
    this.formValidator = this.fb.group({
      nombresesor: ['', [Validators.required, Validators.minLength(4)]],
      cedula: ['', [Validators.required]],
      telefono:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      contrasena:['',[Validators.required]]
    });
  }
}
