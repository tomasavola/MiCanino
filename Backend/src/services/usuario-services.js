import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
//import Pizza from "../models/usuario.js";

export default class UsuarioService {

insert = async (usuario) => {
    let rowsAffected = 0;
    console.log('insert')
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('pNombre', sql.VarChar, usuario?.nombre ?? '')
            .input('pApellido', sql.VarChar, usuario?.apellido ?? '')
            .input('pMail', sql.VarChar, usuario?.mail ?? '')
            .input('pTelefono', sql.Int, usuario?.telefono ?? '')
            .input('pPassword', sql.VarChar, usuario?.password ?? '')
            .query('insert into Usuario( Nombre, Apellido, Mail, Telefono, Password) VALUES ( @pNombre, @pApellido, @pMail, @pTelefono, @pPassword)');
        rowsAffected = result.rowsAffected;
    } catch (error) {
        console.log(error);
    }
    return rowsAffected;
}

update = async (usuario) => {
    console.log('update')
    let rowsAffected = 0;
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('pNombre', sql.VarChar, usuario?.nombre ?? '')
            .input('pApellido', sql.VarChar, usuario?.apellido ?? '')
            .input('pMail', sql.VarChar, usuario?.mail ?? '')
            .input('pTelefono', sql.Int, usuario?.telefono ?? '')
            .input('pPassword', sql.VarChar, usuario?.password ?? '')
            .input('pId', sql.Int, usuario?.id ?? '')
        .query('update Usuario SET Nombre = @pNombre, Apellido = @pApellido, Mail = @pMail, Telefono = @pTelefono, Password =  @pPassword WHERE Id = @pId');
        rowsAffected = result.rowsAffected;
    } catch (error) {
        console.log(error);
    }
    return rowsAffected;
}

}