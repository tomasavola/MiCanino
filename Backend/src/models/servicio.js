export default class Servicio {
    constructor(id, idUsuario, idTipoServicio, nombreEstablecimiento,latitud,longitud,telefono,mail,descripcion) {
        this.id = id;
        this.idUsuario = idUsuario;
        this.idTipoServicio = idTipoServicio;
        this.nombreEstablecimiento = nombreEstablecimiento;
        this.latitud = latitud;
        this.longitud=longitud;
        this.telefono = telefono;
        this.mail = mail;
        this.descripcion = descripcion;
    }

}