export default class Servicio {
    constructor(id, idUsuario, idTipoServicio, nombreEstablecimiento,direccion,telefono,mail,descripcion) {
        this.id = id;
        this.idUsuario = idUsuario;
        this.idTipoServicio = idTipoServicio;
        this.nombreEstablecimiento = nombreEstablecimiento;
        this.direccion = direccion;
        this.telefono = telefono;
        this.mail = mail;
        this.descripcion = descripcion;
    }

}