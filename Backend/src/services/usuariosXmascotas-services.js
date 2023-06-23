import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
//import Pizza from "../models/usuario.js";

export default class UsuarioXmascotaService {


    deleteById = async (idMascota) => {
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIdMascota', sql.Int, idMascota)
                .query('DELETE FROM UsuariosXMascotas WHERE IdMascota = @pIdMascota');
            rowsAffected = result.rowsAffected;
            console.log('rowsAffected');
            console.log(rowsAffected);
        } catch (error) {
            console.log('error');
        }
        return rowsAffected;
    }


}