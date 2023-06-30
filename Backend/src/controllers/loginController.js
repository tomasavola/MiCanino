import LoginService from "../services/login-services";
import Login from "../models/login.js";
import express, { Router } from "express";
import cors from "cors"


let loginService = new LoginService();
const router = new Router();

router.get('/usuario/:idUsuario', async (req, res) =>{
    try{
        let usuarioLogin = await loginService.getById(req.params.idUsuario);
        res.status(200).send(usuarioLogin);
    }catch(e){
        console.log(e);
        res.status(404).send('<p>No se encontro el usuario. Verifique que los datos sean correctos</p>');
    }
})

export default router;                                                                                                                               