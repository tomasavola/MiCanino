import UsuarioService from "../services/usuario-services.js";
import Canino from "../models/usuario.js";
import express, { Router } from "express";
import cors from "cors"


let usuarioService = new UsuarioService();
const router = new Router();

router.post('/', async (req, res) =>{
    try{
        let usuarioNuevo = req.body;
        console.log(usuarioNuevo);
        let rowsAffected = await usuarioService.insert(usuarioNuevo);
        res.status(200).json({resultado: true});    
    }catch(e){
        res.status(404).json({resultado: false});   
    }
});

router.put('/:id', async (req, res) => {
    try{
        let usuarioNuevo = req.body;
        console.log(usuarioNuevo);
        let rowsAffected = await usuarioService.update(usuarioNuevo);
        res.status(200).json({resultado: true});    
    }catch(e){
        res.status(404).json({resultado: false});   
    }res.status(404).send('<p>No se actualizo el usuario</p>');
    }
  );
export default router;