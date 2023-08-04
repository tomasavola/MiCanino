import CaninoPerdidoService from "../services/caninoPerdido-services.js";
//import UsuarioXmascotaService from "../services/usuariosXmascotas-services.js";
import CaninoPerdido from "../models/caninoPerdido.js";
import express, { Router } from "express";
import cors from "cors"

let caninoPerdidoService = new CaninoPerdidoService();
//let usuarioXmascotaService = new UsuarioXmascotaService();

const router = new Router();

router.post('/', async (req, res) => {
    try {
        let caninoPerdidoNuevo = req.body;
        console.log(caninoPerdidoNuevo);
        let rowsAffected = await caninoPerdidoService.insert(caninoPerdidoNuevo);
        res.status(200).json({ resultado: true });
    } catch (e) {
        res.status(404).json({ resultado: false });
    }
})

router.put('/:id', async (req, res) => {
    try {
        let caninoPerdidoNuevo = req.body;
        console.log(caninoPerdidoNuevo);
        let rowsAffected = await caninoPerdidoService.update(caninoPerdidoNuevo);
        res.status(200).json({ resultado: true });
    } catch (e) {
        res.status(404).json({ resultado: false });
    } res.status(404).send('<p>No se actualizo el canino perdido</p>');
}
);
/*
router.get('/usuario/:idUsuario', async (req, res) => {
    try {
        let caninosPerdidos = await caninoPerdidoService.getByIdUsuario(req.params.idUsuario);
        res.status(200).send(caninosPerdidos);
    } catch (e) {
        console.log(e);
        res.status(404).send('<p>No se encontro el canino perdido</p>');
    }
})
*/

router.get('/', async (req, res) => {
    try {
        let caninosPerdidos = await caninoPerdidoService.getAll();
        res.status(200).send(caninosPerdidos);
    } catch (e) {
        console.log(e);
        res.status(404).send('<p>No se encontro el canino perdido</p>');
    }
});

router.get('/:id', async (req, res) => {
    try {
        let caninosPerdidos = await caninoPerdidoService.getById(req.params.id);
        res.status(200).send(caninosPerdidos);
    } catch (e) {
        console.log(e);
        res.status(404).send('<p>No se encontro el canino perdido</p>');
    }
});

router.delete('/:id', async (req, res) => {
    try {
      console.log("Estoy en el endpoint");
      let CaninoPerdido = await CaninosPerdidosService.deleteById(req.params.id);
    } catch (error) {
      console.log(error);
      res.status(404).send('<p>No se pudo eliminar el canino perdido</p>');
    }

});
export default router;                                                                                                                               