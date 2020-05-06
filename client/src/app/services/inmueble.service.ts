import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InmuebleModel } from '../models/inmueble.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  url:String= "http://localhost:3000/api/inmuebles/";

  constructor(private http: HttpClient) { }


  obtenerTodosInmuebles():Observable<InmuebleModel[]>{

    return this.http.get<InmuebleModel[]>(`${this.url}`,{
      
    },
    )
  }

  obtenerInmueblePorId(inmuebleId:String): Observable<InmuebleModel>{

    return this.http.get<InmuebleModel>(`${this.url}${inmuebleId}`,)
  }

  guardarNuevoInmueble(inmueble: InmuebleModel):Observable<InmuebleModel>
  {
    return this.http.post<InmuebleModel>(`${this.url}`, inmueble,{

   
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    })
  }

  actualizarInmueble(inmueble: InmuebleModel):Observable<InmuebleModel>
  {
    return this.http.put<InmuebleModel>(`${this.url}`, inmueble,{

   
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }

  eliminarInmueble(inmuebleId: String):Observable<InmuebleModel>
  {
    return this.http.delete<InmuebleModel>(`${this.url}${inmuebleId}`);
  }



}
