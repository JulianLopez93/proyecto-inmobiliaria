import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SolicitudModel } from '../models/solicitud.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url:String= "http://localhost:3000/api/solicitudes/";

  constructor(private http: HttpClient) {  }

  crearNuevaSolicitud(solicitud: SolicitudModel):Observable<SolicitudModel>
  {
    return this.http.post<SolicitudModel>(`${this.url}`, solicitud,{

   
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    })
  }
}
