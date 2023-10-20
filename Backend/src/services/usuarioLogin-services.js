import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
import { randomUUID } from "crypto";

export default class UsuarioLoginService {


    getByEmailPassword = async (email, password) => {
        let returnUsuario = null;
        console.log('GetUsuarioByNamePassword')
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pEmail', sql.VarChar, email)
                .input('pPassWord', sql.VarChar, password)
                .query(`SELECT * 
                        FROM Usuario
                        LEFT JOIN UsuariosXMascotas ON Usuario.Id = UsuariosXMascotas.IdUsuario
                        LEFT JOIN Mascota ON Mascota.Id = UsuariosXMascotas.IdMascota
                        WHERE Usuario.Mail = @pEmail AND Usuario.Password = @pPassWord`);
            datos = result.recordsets[0];
            returnUsuario = {
                Id          : datos[0].Id,
                Nombre      : datos[0].Nombre,
                Apellido    : datos[0].Apellido,
                Mail        : datos[0].Mail,
                Telefono    : datos[0].Telefono,
                Password    : datos[0].Password,
                Mascotas    : []
            }}

            if (datos.length > 1 ){
                for (i=datos.length )..{
                    Mascotas.push({
                        Id : datos[i].Id
                        Nombre : datos[i].Nombre
                        FechaNacimiento = : datos[i].FechaNacimiento
                        IdRaza = : datos[i].IdRaza
                        FechaNacimiento = : datos[i].FechaNacimiento
                        FechaNacimiento = : datos[i].FechaNacimiento
                        FechaNacimiento = : datos[i].FechaNacimiento
                        FechaNacimiento = : datos[i].FechaNacimiento
                        FechaNacimiento = : datos[i].FechaNacimiento
                        FechaNacimiento = : datos[i].FechaNacimiento
                    })
                }
            }



            datos= [
                    Id	Nombre	Apellido	Mail	Telefono	Password	Id	IdMascota	IdUsuario	EnAdopcion	Id	Nombre	FechaNacimiento	IdRaza	Descripcion	Peso	Foto	PartidaNacimiento	CarnetVacunacion
                    2	Ivan	Kwiat	Ivan@gmail.com	11155555	1231231	1	1	2	0	1	Gaudi	NULL	4	NULL	NULL	NULL	NULL	NULL
                    2	Ivan	Kwiat	Ivan@gmail.com	11155555	1231231	4	4	2	1	4	Lassie	NULL	47	Lassie	190	NULL	NULL	NULL   
                ]
 */
            returnUsuario = result.recordsets[0][0];
        } catch (e) {
            console.log(e);
            CopiaError(e.toString() + " AT UsuarioLoginService/GetUsuarioByNamePassword");
        }
        return returnUsuario;
    }

}
