import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import{Router}from'@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
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
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email:['',[Validators.required, Validators.email]],
      phone:['',[Validators.required]], 
      password:['',[Validators.required, Validators.minLength(4)]],
      address:['', [Validators.required, Validators.minLength(4)]],
      city:['', [Validators.required, Validators.minLength(4)]]
    });
  }
}
