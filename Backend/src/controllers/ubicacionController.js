

import Servicio from "../models/servicio.js";
import express, { Router } from "express";
import cors from "cors"
import UbicacionService from "../services/ubicacion-services.js";

let ubicacionService = new UbicacionService();
const router = new Router();

router.get('/', async (req, res) => {
    try {
        let ubicaciones = await ubicacionService.getAll();
        res.status(200).send(ubicaciones);
    } catch (e) {
        console.log(e);
        res.status(404).send('<p>No se encontro el canino</p>');
    }
});


export default router;                                                                                                                               