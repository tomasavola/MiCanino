import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
//import Pizza from "../models/canino.js";

export default class CaninoPerdidoService {

    getAll = async () => {
        console.log("getAll")
        let returnList = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM MascotaPerdida');
            returnList = result.recordset;
        } catch (error) {
            console.log(error);
            Escribir(error);
        }
        return returnList;
    }

    getById = async (id) => {
        console.log('getById')
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM MascotaPerdida WHERE id = @pId');
            returnEntity = result.recordsets[0][0]
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    /*getByIdUsuario = async (IdUsuario) => {
        let returnList = null;
        console.log('getByIdUsuario')
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIdUsuario', sql.Int, IdUsuario)
                .query('SELECT Mascota.* FROM Mascota INNER JOIN UsuariosXMascotas ON UsuariosXMascotas.IdMascota = Mascota.Id WHERE UsuariosXMascotas.IdUsuario = @pIdUsuario');
            returnList = result.recordsets[0]
        } catch (e) {
            console.log(e);
            CopiaError(e.toString() + " AT CaninoSevice../getByIdUsuario");
        }
        console.log(returnList);
        return returnList;

    }
    */

    insert = async (caninoPerdido) => {
        let rowsAffected = 0;
        console.log('insert')
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pUbicacion', sql.VarChar, caninoPerdido?.ubicacion ?? '')
                .input('pFechaPerdido', sql.DateTime, caninoPerdido?.fechaPerdido ?? '')
                .query('insert into MascotaPerdida( Ubicacion, FechaPerdido) VALUES ( @pUbicacion, @pFechaPerdido)');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    update = async (caninoPerdido) => {
        console.log('update')
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
             .input('pUbicacion', sql.VarChar, caninoPerdido?.ubicacion ?? '')
                .input('pFechaPerdido', sql.DateTime, caninoPerdido?.fechaPerdido ?? '')
                .input('pId', sql.Int, caninoPerdido?.id ?? '')
                .query('update Mascota SET Ubicacion = @pUbicacion, FechaPerdido = @pFechaPerdido WHERE Id = @pId');
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
                .query('DELETE FROM MascotaPerdida WHERE Id = @pId');
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


