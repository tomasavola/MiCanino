import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
import Pizza from "../models/canino.js";

export default class CaninoService {

    getAll = async () => {
        console.log("getAll")
        let returnList = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Mascota');
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
                .query('SELECT * FROM Mascota WHERE id = @pId');
            returnEntity = result.recordsets[0][0]
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    getByIdUsuario = async (IdUsuario) => {
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

    insert = async (canino) => {
        let rowsAffected = 0;
        console.log('insert')
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.VarChar, canino?.nombre ?? '')
                .input('pFechaNacimiento', sql.DateTime, canino?.fecha ?? '')
                .input('pDescripcion', sql.VarChar, canino?.descripcion ?? '')
                .input('pPeso', sql.Float, canino?.peso ?? '')
                .input('pFoto', sql.VarChar, canino?.foto ?? '')
                .input('pPartidaNacimiento', sql.VarChar, canino?.partidaNacimiento ?? '')
                .input('pCarnetVacunacion', sql.VarChar, canino?.carnetVacunacion ?? '')
                .query('insert into Mascota( Nombre, FechaNacimiento, Descripcion, Peso, Foto, PartidaNacimiento, CarnetVacunacion) VALUES ( @pNombre, @pFechaNacimiento, @pDescripcion, @pPeso, @pFoto, @pPartidaNacimiento, @pCarnetVacunacion )');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    update = async (canino) => {
        console.log('update')
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pNombre', sql.VarChar, canino?.nombre ?? '')
            .input('pFechaNacimiento', sql.DateTime, canino?.fecha ?? '')
            .input('pDescripcion', sql.VarChar, canino?.descripcion ?? '')
            .input('pPeso', sql.Float, canino?.peso ?? '')
            .input('pFoto', sql.VarChar, canino?.foto ?? '')
            .input('pPartidaNacimiento', sql.VarChar, canino?.partidaNacimiento ?? '')
            .input('pCarnetVacunacion', sql.VarChar, canino?.carnetVacunacion ?? '')
            .query('update Mascota SET Nombre = @pNombre, FechaNacimiento = @pFechaNacimiento, Descripcion = @pDescripcion, Peso = @pPeso, Foto =  @pFoto, PartidaNacimiento =  @pPartidaNacimiento, CarnetVacunacion = @pCarnetVacunacion   WHERE Id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

