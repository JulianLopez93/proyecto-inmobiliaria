import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import{Router}from'@angular/router';
import{SecurityService}from'src/app/services/security.service';


declare var openPlatformModalMessage: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  fgValidation:FormGroup;

  constructor(private fb:FormBuilder, private secService:SecurityService,
    
    private router:Router) { }

  ngOnInit() {
    this.fgValidationBuilder();
    //this.loginEvent();
  }

  fgValidationBuilder(){
    this.fgValidation=this.fb.group({
      username:['admin@gmail.com',[Validators.required,Validators.maxLength(30),Validators.minLength(8),Validators.email]],
      password:['12345',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]]
    });
  }

  get fg(){
    return this.fgValidation.controls;

  }

  loginEvent(){
    if(this.fgValidation.invalid){
      alert("Datos erróneos");//
      
    }
    else{
      let u =this.fg.username.value;
      let p=this.fg.password.value;
      
      this.secService.loginUser(u,p).subscribe(data=>{
        //user=data;  
      
        if (data != null){
          console.log(data)
          this.router.navigate(['/home']);
          this.secService.saveLoginInfo(data);
      }

      else
      {
        openPlatformModalMessage("Los datos no son válidos!");
        //alert("Los datos no son válidos!")
      }
    
    });
      
    }
  }

}
