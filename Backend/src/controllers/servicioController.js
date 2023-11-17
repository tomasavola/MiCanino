import ServicioService from "../services/servicio-services.js";
import Servicio from "../models/servicio.js";
import express, { Router } from "express";
import cors from "cors"

let servicioService = new ServicioService();
const router = new Router();

router.post('/', async (req, res) => {
    try {
        let servicioNuevo = req.body;
        console.log(servicioNuevo);
        let rowsAffected = await servicioService.insert(servicioNuevo);
        res.status(200).json({ resultado: true });
    } catch (e) {
        res.status(404).json({ resultado: false });
    }
})

router.get('/', async (req, res) => {
    try {
        let servicios = await servicioService.getAll();
        res.status(200).send(servicios);
    } catch (e) {
        console.log(e);
        res.status(404).send('<p>No se encontro el canino</p>');
    }
});

router.get('/', async (req, res) => {
    try {
        let direccion = await servicioService.getAllUbicaciones();
        res.status(200).send(direccion);
    } catch (e) {
        console.log(e);
        res.status(404).send('<p>No se encontro la direccion</p>');
    }
});

export default router;                                                                                                                               