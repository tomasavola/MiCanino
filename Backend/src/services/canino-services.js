import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";
import Pizza from "../models/canino.js";

export default class PizzaService {
    /*
    getAll = async (top, orderField, sortOrder) =>{
        let listaPizzas = null;
        console.log('GetAll')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()

                .query('SELECT ' + (top == null ? '' : 'TOP ' + top) + ' * FROM Pizzas ' + (orderField == null ? 'ORDER BY Id' : 'ORDER BY ' + orderField) + ' ' + (sortOrder == null ? '' : '' + sortOrder));
                
                //.query('exec sp_GetAll');
            listaPizzas = result.recordsets[0];
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT PizzaService/GetAll");
            
        }
        //console.log(listaPizzas);
        return listaPizzas;
        
    }

    getById = async (id) =>{
        let returnPizza = null;
        console.log('GetById')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                // .input('pId', sql.Int, id)
                // .query('SELECT * FROM Pizzas WHERE Id = @pId');
                .input('pId', sql.Int, id)
                .query('exec sp_GetById @pId');
            returnPizza = result.recordsets[0][0]; // devuelve el primer elemento del primer request del query
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT PizzaService/GetById");
        }
        return returnPizza;
        // console.log(returnPizza)
    }
*/
/*insert = async (canino) => {
    let rowsAffected = 0;
    console.log('InsertCanino');
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('Nombre', sql.VarChar, canino.nombre)
            .input('FechaNacimiento', sql.DateTime, canino.fechaNacimiento)
            .input('Descripcion', sql.VarChar, canino.descripcion)
            .input('Peso', sql.Float, canino.peso)
            .input('IdRaza', sql.Float, canino.idRaza)
            .input('Foto', sql.VarChar, canino.foto)
            .input('PartidaNacimiento', sql.VarChar, canino.partidaNacimiento)
            .input('CarnetVacunacion', sql.VarChar, canino.carnetVacunacion)
            .query('exec sp_Insert @Nombre = @nombre, @FechaNacimiento = @fechaNacimiento, @Descripcion = @descripcion, @Peso = @peso, @IdRaza = @idRaza, @Foto = @foto, @PartidaNacimiento = @partidaNacimiento, @CarnetVacunacion = @carnetVacunacion');
        rowsAffected = result.rowsAffected;
        console.log('Canino creada');
    } catch (e) {
        console.log(e);
        console.log('Tipo de error:', e.name);
        CopiaError(e.toString() + " AT CaninoService/Insert");
    }
    return rowsAffected;
}
*/

getByIdUsuario = async (IdUsuario) =>{
    let returnList = null;
    console.log('GetByIdUsuario')
    try{
        let pool = await sql.connect(config);
        let result = await pool.request()
            // .input('pId', sql.Int, id)
            // .query('SELECT * FROM Pizzas WHERE Id = @pId');
            .input('pIdUsuario', sql.Int, IdUsuario)
            .query('SELECT Mascota.* FROM Mascota INNER JOIN UsuariosXMascotas ON UsuariosXMascotas.IdMascota = Mascota.Id WHERE UsuariosXMascotas.IdUsuario = @pIdUsuario');
            returnList = result.recordsets[0] // devuelve el primer elemento del primer request del query
    } catch (e){
        console.log(e);
        CopiaError(e.toString() + " AT CaninoSevice../getByIdUsuario");
    }
    console.log(returnList);
    return returnList;
    // console.log(returnPizza)
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
/*
    update = async (pizza) => {
        let rowsAffected = 0;
        console.log('UpdatePizza')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()            
                // .input('Id', sql.Int, pizza.id)    
                // .input('Nombre', sql.VarChar, pizza.nombre)
                // .input('LibreGluten', sql.Bit, pizza.libreGluten)
                // .input('Importe', sql.Float, pizza.importe)
                // .input('Descripcion', sql.VarChar, pizza.descripcion)
                // .query('UPDATE Pizzas SET Nombre = @Nombre, LibreGluten = @LibreGluten, Importe = @Importe, Descripcion = @Descripcion WHERE Id = @Id');

                .input('id', sql.Int, pizza.id)    
                .input('nombre', sql.VarChar, pizza.nombre)
                .input('libreGluten', sql.Bit, pizza.libreGluten)
                .input('importe', sql.Float, pizza.importe)
                .input('descripcion', sql.VarChar, pizza.descripcion)
                .query('exec sp_UpdateById @Id = @id, @Nombre = @nombre, @LibreGluten = @libreGluten, @Importe = @importe, @Descripcion = @descripcion');
            rowsAffected = result.rowsAffected; // devuelve la cantidad de registros afectados (1 en caso de haberse actualizado correctamente la pizza)
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT PizzaService/Update");
        }
        return rowsAffected;
    }

    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('DeleteById')
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                // .input('pId', sql.Int, id) // input (name, [type], value) - Agrega un parámetro de entrada al request.
                // .query('DELETE FROM Pizzas WHERE Id = @pId');
                .input('pId', sql.Int, id)
                .query('exec sp_DeleteById @pId');
            rowsAffected = result.rowsAffected; // devuelve la cantidad de registros afectados (1 en caso de haberse eliminado correctamente la pizza)
        } catch (e){
            //console.log(e);
            CopiaError(e.toString() + " AT PizzaService/DeleteById");
        }
        return rowsAffected;
    }
    */
}

