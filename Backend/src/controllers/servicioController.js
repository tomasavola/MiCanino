import ServicioService from "../services/servicio-services";
import servicio from "../models/servicio";
import express, { Router } from "express";
import cors from "cors"


let servicioService = new ServicioService();
const router = new Router();

router.get('/', async (req, res) => {
    try{
        let todosLosServicios = await servicioService.getAll();
        res.status(200).send(todosLosServicios);
    }catch(e){
        console.log(e);
        res.status(404).send('<p> No se pueden mostrar los servicios </p>');
    }
  });

export default router;                                                                                                                               