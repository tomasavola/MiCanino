import HistorialService from "../services/historial-services.js";
import Historial from "../models/historial.js";
import express, { Router } from "express";
import cors from "cors"

let historialService = new HistorialService();
const router = new Router();

router.post('/', async (req, res) => {
  try {
    let filaNueva = req.body;
    console.log(filaNueva);
    let rowsAffected = await historialService.insert(filaNueva);
    res.status(200).json({ resultado: true });
  } catch (e) {
    res.status(404).json({ resultado: false });
  }
})

router.put('/:id', async (req, res) => {
  try {
    let filaNueva = req.body;
    let rowsAffected = await historialService.update(filaNueva);
    res.status(200).json({ resultado: true });
  } catch (e) {
    res.status(404).json({ resultado: false });
  } res.status(404).send('<p>No se actualizo la fila del historial</p>');
}
);


router.get('/', async (req, res) => {
  try {
    let historial = await historialService.getAll();
    res.status(200).send(historial);
  } catch (e) {
    console.log(e);
    res.status(404).send('<p>No se encontro el historial</p>');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log("Estoy en el endpoint");
    let fila = await historialService.deleteById(req.params.id);
  } catch (error) {
    console.log(error);
    res.status(404).send('<p>No se pudo eliminar la fila</p>');
  }
});
export default router;                                                                                                                               