import { InmuebleModel } from 'src/app/models/inmueble.model';

export class SolicitudModel{

    id: String;
    idCliente: String;
    inmueble:InmuebleModel;
    estado: String;
    fecha: Date;
    comentarios: String [];
    idCodeudor: String;
    tipoSolicitud: String;
    tipoInmueble: String;
    fotoInmueble: String;

}