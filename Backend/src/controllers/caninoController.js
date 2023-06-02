import CaninoService from "../services/canino-services.js";
import Canino from "../models/canino.js";
import express, { Router } from "express";
import cors from "cors"

let caninoService = new CaninoService();

const router = new Router();
/*
router.get('', async (req, res) =>{
    try{
        let listaCaninos = await caninoService.getAll((req.query.top == undefined ? null : req.query.top), (req.query.orderField == undefined ? null : req.query.orderField), (req.query.sortOrder == undefined ? null : req.query.sortOrder));
        res.send(listaCaninos);
    }catch(e){
        console.log(e);
        res.send('Algo falló');
    }
})

router.get('/:id', async (req, res) =>{
    try{
        let caninolegida = await caninoService.getById(req.params.id);
        res.status(200).send(caninoElegida);
    }catch(e){
        console.log(e);
        res.status(404).send('<p>No se encontro el canino</p>');
    }
})
*/
router.post('', async (req, res) =>{
    try{
        let caninoNuevo = new Canino(0, (req.body.Nombre == undefined ? "" : req.body.Nombre), (req.body.FechaNacimiento == undefined ? "" : req.body.FechaNacimiento), (req.body.Descripcion == undefined ? "" : req.body.Descripcion), (req.body.Peso == undefined ? 0 : req.body.Peso),(req.body.idRaza == undefined ? "" : req.body.IdRaza),(req.body.Foto == undefined ? "" : req.body.Foto),(req.body.PartidaNacimiento == undefined ? "" : req.body.PartidaNacimiento),(req.body.CarnetVacunacion == undefined ? "" : req.body.CarnetVacunacion));        
        let rowsAffected = await caninoService.insert(caninoNuevo);
        res.status(200).send('<p>Se creo ' + rowsAffected[0] +' canino</p>');    
    }catch(e){
        res.status(404).send('<p>No se pudo crear el canino</p>');   
    }
})
/*
router.put('', async (req, res) =>{
    try{
        let pizzaNueva = new Pizza((req.body.Id == undefined ? -1 : req.body.Id), req.body.Nombre, req.body.LibreGluten, req.body.Importe, req.body.Descripcion);
        let rowsAffected = await pizzaService.update(pizzaNueva);
        res.status(200).send('<p>Se actualizo ' + rowsAffected[0] +' pizza</p>');    
    }catch(e){
        res.status(404).send('<p>No se pudo actualizar la pizza</p>');   
    }
})

router.delete('/:id', async (req, res) =>{
    try{
        let rowsAffected = await pizzaService.deleteById(req.params.id);
        res.status(200).send('<p>Se elimino ' + rowsAffected[0] +' pizza</p>');    
    }catch(e){
        res.status(404).send('<p>No se pudo eliminar la pizza</p>');   
    }
})

*/
export default router;