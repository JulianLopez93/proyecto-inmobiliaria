import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  name:string='';
  
  //variable que indica si el usuario esta logeado
  
  userLogged:boolean=false;

  url:String= "http://localhost:3000/api/usuarios/";
  infoUsuario= new BehaviorSubject<UsuarioModel>(new UsuarioModel());

  constructor(private http: HttpClient) { 
    this.verificarSesionUsuario();
  }


  verificarSesionUsuario()
  {
    let sesion=localStorage.getItem("Usuario Activo");
    
    if (sesion!= undefined)
    {
      this.infoUsuario.next(JSON.parse(sesion))
    } 

  }
  
  

  getInfoUsuario(){
    return this.infoUsuario.asObservable();
  }


//usaremos este metodo en el navbar del master page para verificar si el usuario 
  //esta logeado o no
  isUserLogged(){
    return {logged:this.userLogged,name:this.name};
  }

  loginUser(username:String,pass:String):Observable<UsuarioModel>
  {
    
      return this.http.post<UsuarioModel>(`${this.url}login?include=User`, {
       email:username,
       contrasena:pass
     },
     {
       headers: new HttpHeaders({
         "content-type":"application/json"
       })
     })

  }

  logoutUser():Observable<UsuarioModel>
  {
    return this.http.post<UsuarioModel>(`${this.url}logout?access_token=5OHM6vEQw1CUQasAcwOla9rlGmsgckgoEQMnrax8z3Jxptkj1pf9VxVzTqKZbuYa`, {
     
    },
    {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    })
  }

  getUsers():Observable<UsuarioModel>
  {
    return this.http.get<UsuarioModel>(`${this.url}`)  
  }
  
  registerUser(primerNombre:String,segundoNombre:String,primerApellido:String,segundoApellido:String,email:String,direccion:String,telCelular:String, isLogged:boolean){
    //this.userLogged=true;

  }

  saveLoginInfo(user: UsuarioModel)
  {
    user.isLogged=true;
    this.infoUsuario.next(user);
    localStorage.setItem("Usuario activo", JSON.stringify(user));
  }

  /*logoutUser()
  {
    localStorage.removeItem("administrator");
    //this.userInfo.next(new UserModel());
  }*/

}
 