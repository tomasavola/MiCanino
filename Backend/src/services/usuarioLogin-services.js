import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
import { randomUUID } from "crypto";

export default class UsuarioLoginService {


    getByEmailPassword = async (email, password) => {
        let returnUsuario = null;
        let datos;
        console.log('GetUsuarioByNamePassword')
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pEmail', sql.VarChar, email)
                .input('pPassWord', sql.VarChar, password)
                .query(`SELECT 
                        Usuario.Id, Usuario.Nombre, Usuario.Apellido, Usuario.Mail, Usuario.Telefono, Usuario.Password,
                        Mascota.Id AS MascotaId, Mascota.Nombre AS MascotaNombre
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
            };
            
            if (datos.length >= 1 ){
                for (let i=0; i< datos.length; i++ ){
                    console.log(i);
                    console.log(datos[i].MascotaId + " EESTOY EN EL IF DEL SERVICE" );
                    console.log(datos[i].MascotaNombre + " EESTOY EN EL IF DEL SERVICE" );
                    
                    returnUsuario.Mascotas.push({
                        Id      : datos[i].MascotaId,
                        Nombre  : datos[i].MascotaNombre
                    })
                    
                }
            }
        } catch (e) {
            console.log(e);
            CopiaError(e.toString() + " AT UsuarioLoginService/GetUsuarioByNamePassword");
        }
        return returnUsuario;
    }

}
