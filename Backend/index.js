import express from "express";
import cors from "cors";
import CaninoRouter from "./src/controllers/caninoController.js";
import UsuarioRouter from "./src/controllers/usuarioController.js";
import UsuarioLoginRouter from "./src/controllers/usuarioLoginController.js";
import ServicioRouter from "./src/controllers/servicioController.js";
import EventoRouter from "./src/controllers/eventoController.js";
import HistorialRouter from "./src/controllers/historialController.js";
import CaninoPerdidoRouter from "./src/controllers/caninoPerdidoController.js";



const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api/caninos/', CaninoRouter);
app.use('/api/caninos/usuario/', UsuarioRouter);
app.use('/api/caninos/login/', UsuarioLoginRouter);
app.use('/api/caninos/servicio/', ServicioRouter);
app.use('/api/caninos/evento/', EventoRouter);
app.use('/api/caninos/historial/', HistorialRouter);
app.use('/api/caninos/caninoPerdido/', CaninoPerdidoRouter);




app.listen(port, () => {
  console.log(`"server" Listening on port ${port}`);
});