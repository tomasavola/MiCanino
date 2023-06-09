import CaninoService from "../services/canino-services.js";
import Canino from "../models/canino.js";
import express, { Router } from "express";
import cors from "cors"

let caninoService = new CaninoService();

const router = new Router();

router.post('', async (req, res) =>{
    try{
        let caninoNuevo = new Canino(0, (req.body.Nombre == undefined ? "" : req.body.Nombre), (req.body.FechaNacimiento == undefined ? "" : req.body.FechaNacimiento), (req.body.Descripcion == undefined ? "" : req.body.Descripcion), (req.body.Peso == undefined ? 0 : req.body.Peso),(req.body.idRaza == undefined ? "" : req.body.IdRaza),(req.body.Foto == undefined ? "" : req.body.Foto),(req.body.PartidaNacimiento == undefined ? "" : req.body.PartidaNacimiento),(req.body.CarnetVacunacion == undefined ? "" : req.body.CarnetVacunacion));        
        let rowsAffected = await caninoService.insert(caninoNuevo);
        res.status(200).send('<p>Se creo ' + rowsAffected[0] +' canino</p>');    
    }catch(e){
        res.status(404).send('<p>No se pudo crear el canino</p>');   
    }
})

export default router;