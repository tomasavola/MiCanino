import ServicioService from "../services/servicio-services.js";
import Servicio from "../models/servicio.js";
import express, { Router } from "express";
import cors from "cors"

let servicioService = new ServicioService();
const router = new Router();

router.post('/', async (req, res) =>{
    try{
        let servicioNuevo = req.body;
        console.log(servicioNuevo);
        let rowsAffected = await servicioService.insert(servicioNuevo);
        res.status(200).json({resultado: true});    
    }catch(e){
        res.status(404).json({resultado: false});   
    }
})

router.get('/', async (req, res) => {
    console.log("CONTROLLER")
    try{
        let servicio = await servicioService.getAll();
        res.status(200).send(servicio);
    }catch(e){
        console.log(e);
        res.status(404).send('<p>No se encontro el canino</p>');
    }
  });

  
export default router;                                                                                                                               