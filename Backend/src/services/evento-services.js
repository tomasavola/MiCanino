import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
//import Pizza from "../models/canino.js";

export default class EventoService {

    getAll = async () => {
        console.log("getAll")
        let returnList = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Eventos');
                returnList = result.recordset;
        } catch (error) {
            console.log(error);
            Escribir(error);
        }
        return returnList;
    }

    }

    insert = async (evento) => {
        let rowsAffected = 0;
        console.log('insert')
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.VarChar, evento?.nombre ?? '')
                .input('pFecha', sql.DateTime, evento?.fecha ?? '')
                .input('pDescripcion', sql.VarChar, evento?.descripcion ?? '')
                .query('insert into Evento( Nombre, Fecha, Descripcion) VALUES ( @pNombre, @Fecha, @pDescripcion)');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    update = async (evento) => {
        console.log('update')
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pNombre', sql.VarChar, evento?.nombre ?? '')
            .input('pFecha', sql.DateTime, evento?.fecha ?? '')
            .input('pDescripcion', sql.VarChar, evento?.descripcion ?? '')
            .input('pId', sql.Float, evento?.id ?? '')
            .query('update Evento SET Nombre = @pNombre, Fecha = @pFecha, Descripcion = @pDescripcion WHERE Id = @pId');
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
                .query('DELETE FROM Evento WHERE Id = @pId');
            rowsAffected = result.rowsAffected;
            console.log('rowsAffected');
            console.log(rowsAffected);
        } catch (error) {
            console.log('error');
            console.log(error);
        }
        return rowsAffected;
    }



