import express from "express";
import cors from "cors";
import CaninoRouter from "./src/controllers/caninoController.js";
import UsuarioRouter from "./src/controllers/usuarioController.js";
import UsuarioLoginRouter from "./src/controllers/usuarioLoginController.js";
import ServicioRouter from "./src/controllers/servicioController.js";
import EventoRouter from "./src/controllers/eventoController.js";
import HistorialRouter from "./src/controllers/historialController.js";
import CaninoPerdidoRouter from "./src/controllers/caninoPerdidoController.js";
import UbicacionRouter from "./src/controllers/ubicacionController.js";


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api/caninos/', CaninoRouter);
app.use('/api/evento/', EventoRouter);
app.use('/api/usuario/', UsuarioRouter);
app.use('/api/login/', UsuarioLoginRouter);
app.use('/api/servicio/', ServicioRouter);
app.use('/api/historial/', HistorialRouter);
app.use('/api/caninoPerdido/', CaninoPerdidoRouter);
app.use('/api/ubicacion/', UbicacionRouter);



app.listen(port, () => {
  console.log(`"server" Listening on port ${port}`);
});