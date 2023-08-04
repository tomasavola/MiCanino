import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
//import Pizza from "../models/canino.js";

export default class HistorialService {

    getAll = async () => {
        console.log("getAll")
        let returnList = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Historial');
            returnList = result.recordset;
        } catch (error) {
            console.log(error);
            Escribir(error);
        }
        return returnList;
    }


    insert = async (filaNueva) => {
        let rowsAffected = 0;
        console.log('insert')
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pMedicamento', sql.VarChar, filaNueva?.medicamento ?? '')
                .input('pFecha', sql.DateTime, filaNueva?.fecha ?? '')
                .input('pDescripcion', sql.VarChar, filaNueva?.descripcion ?? '')

                .query('insert into Historial(Medicamento, Fecha, Descripcion) VALUES ( @pMedicamento, @pFecha, @pDescripcion )');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    update = async (filaHistorial) => {
        console.log('update')
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pMedicamento', sql.VarChar, filaHistorial?.medicamento ?? '')
                .input('pFecha', sql.DateTime, filaHistorial?.fecha ?? '')
                .input('pId', sql.int, filaHistorial?.id ?? '')
                .input('pDescripcion', sql.VarChar, filaHistorial?.descripcion ?? '')

                .query('update Evento SET Medicamento = @pMedicamento, Fecha = @pFecha, Descripcion = @pDescripcion WHERE Id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    deleteById = async (id) => {
        console.log('delete')
        console.log('id', id);
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM Historial WHERE Id = @pId');
            rowsAffected = result.rowsAffected;
            console.log('rowsAffected');
            console.log(rowsAffected);
        } catch (error) {
            console.log('error');
            console.log(error);
        }
        return rowsAffected;
    }


}
