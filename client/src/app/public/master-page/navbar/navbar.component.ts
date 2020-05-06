import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userInfo: UsuarioModel;
  userLogged:boolean = false;
  userName: String;

  subscription: Subscription;

  constructor(private secService: SecurityService) { }

  ngOnInit() {
    this.verifyUserSession();
  }

  verifyUserSession() {
    this.subscription = this.secService.getInfoUsuario().subscribe(user => {
      this.userInfo = user;
      this.updateInfo();
    });
  }

  updateInfo(){
    let msg = "En sesión: ";
    this.userLogged = this.userInfo.isLogged;
    this.userName = `${msg} ${this.userInfo.primerNombre} ${this.userInfo.segundoNombre} ${this.userInfo.primerApellido} ${this.userInfo.segundoApellido}`;
  }

    /*change(){
    var nuv = document.getElementById('nuv');
    window.onscroll = function() {
    if (window.pageYOffset >50) {
      nuv.classList.add("white");
    } else {
      nuv.classList.remove("white");
    }
  }*/

}





    


