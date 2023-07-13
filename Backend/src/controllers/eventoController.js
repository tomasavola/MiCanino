import EventoService from "../services/evento-services.js";
import Evento from "../models/evento.js";
import express, { Router } from "express";
import cors from "cors"

let eventoService = new EventoService();
const router = new Router();

router.post('/', async (req, res) =>{
    try{
        let eventoNuevo = req.body;
        let rowsAffected = await eventoService.insert(eventoNuevo);
        res.status(200).json({resultado: true});    
    }catch(e){
        res.status(404).json({resultado: false});   
    }
})

router.put('/:id', async (req, res) => {
    try{
        let eventoNuevo = req.body;
        let rowsAffected = await eventoService.update(eventoNuevo);
        res.status(200).json({resultado: true});    
    }catch(e){
        res.status(404).json({resultado: false});   
    }res.status(404).send('<p>No se actualizo el evento</p>');
    }
  );


router.get('/', async (req, res) => {
    try{
        let eventos = await eventoService.getAll();
        res.status(200).send(eventos);
    }catch(e){
        console.log(e);
        res.status(404).send('<p>No se encontro el evento</p>');
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      console.log("Estoy en el endpoint");
      let evento = await eventoService.deleteById(req.params.id);
    } catch (error) {
      console.log(error);
      res.status(404).send('<p>No se pudo eliminar el evento</p>');
    }
  });
export default router;                                                                                                                               