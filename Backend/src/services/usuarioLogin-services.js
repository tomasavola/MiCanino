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
                .query(`SELECT * FROM Usuario WHERE Mail = @pEmail AND Password = @pPassWord`);
            returnUsuario = result.recordsets[0][0];
        } catch (e) {
            console.log(e);
            CopiaError(e.toString() + " AT UsuarioLoginService/GetUsuarioByNamePassword");
        }
        return returnUsuario;
    }

}
