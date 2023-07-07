import UsuarioLoginService from "../services/usuarioLogin-services.js";
import UsuarioLogin from "../models/usuarioLogin.js";
import express, { Router } from "express";
import cors from "cors"

const router = Router();
let usuarioLoginService = new UsuarioLoginService();


router.post('/', async (req, res) => {
  let respuesta;
  let cuerpo = req.body;

  const usuario = await usuarioLoginService.getByEmailPassword(cuerpo.mail, cuerpo.password);
  if (usuario!=null){
    respuesta = res.status(200).json(usuario);
  } else {
    respuesta = res.status(404).send(`No se encontro el usuario  (${cuerpo}).`);
  }

  return respuesta;
});


export default router;