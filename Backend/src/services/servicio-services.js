import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";


export default class SerivcioService {

    getAll = async () => {
        console.log("getAll")
        let returnList = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Servicios');
                returnList = result.recordset;
        } catch (error) {
            console.log(error);
            Escribir(error);
        }
        return returnList;
    }

//PREGUNTARLE A POLSHU QUE COSAS PONER EN LO DE LOS PARAMETROS
    insert = async (servicio) => {
        let rowsAffected = 0;
        console.log('insert')
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.VarChar, canino?.nombre ?? '')
                .input('pNombreEstablecimiento', sql.VarChar, canino?.nombreEstablecimiento ?? '')
                .query('insert into Servicios( Nombre, NombreEstablecimiento) VALUES ( @pNombre, @pNombreEstablecimiento,)');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

}


