import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
import Pizza from "../models/canino.js";

export default class CaninoService {

    getAll = async () => {
        console.log("GetAll")
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Mascotas');
            returnEntity = result.recordsets;
        } catch (error) {
            console.log(error);
            Escribir(error);
        }
        return returnEntity;
    }

    getById = async (id) => {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM Mascotas WHERE id = @pId');
            returnEntity = result.recordsets[0][0]
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    getByIdUsuario = async (IdUsuario) => {
        let returnList = null;
        console.log('GetByIdUsuario')
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
        console.log('INSERT');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.VarChar, canino?.nombre ?? '')
                .input('pFechaNacimiento', sql.DateTime, canino?.fechaNacimiento ?? '')
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
}
