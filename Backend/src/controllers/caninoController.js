import CaninoService from "../services/canino-services.js";
import Canino from "../models/canino.js";
import express, { Router } from "express";
import cors from "cors"

let caninoService = new CaninoService();

const router = new Router();

router.post('/', async (req, res) =>{
    try{
        let caninoNuevo = req.body;
        console.log(caninoNuevo);
        let rowsAffected = await caninoService.insert(caninoNuevo);
        res.status(200).json({resultado: true});    
    }catch(e){
        res.status(404).json({resultado: false});   
    }
})

router.put('/:id', async (req, res) => {
    try{
        let caninoNuevo = req.body;
        console.log(caninoNuevo);
        let rowsAffected = await caninoService.update(caninoNuevo);
        res.status(200).json({resultado: true});    
    }catch(e){
        res.status(404).json({resultado: false});   
    }res.status(404).send('<p>No se actualizo el canino</p>');
    }
  );

router.get('/usuario/:idUsuario', async (req, res) =>{
    try{
        let caninos = await caninoService.getByIdUsuario(req.params.idUsuario);
        res.status(200).send(caninos);
    }catch(e){
        console.log(e);
        res.status(404).send('<p>No se encontro el canino</p>');
    }
})

/*PREGUNTAR POR EL END POINT*/

router.get('/', async (req, res) => {
    try{
        let caninos = await caninoService.getAll();
        res.status(200).send(caninos);
    }catch(e){
        console.log(e);
        res.status(404).send('<p>No se encontro el canino</p>');
    }
  });

  router.get('/:id', async (req, res) => {
    try{
        let caninos = await caninoService.getById(req.params.id);
        res.status(200).send(caninos);
    }catch(e){
        console.log(e);
        res.status(404).send('<p>No se encontro el canino</p>');
    }
  });

 
  

export default router;