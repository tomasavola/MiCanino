// npm run server
import express from "express";
import cors    from "cors";
//import CaninoService from "./src/services/canino-services.js";
import CaninoRouter from "./src/controllers/caninoController.js";

//
// Variables/Constantes del Modulo
//
const app  = express();
const port = 5000;                  // Puerto en donde levanta express (5000)
//const caninoService = new CaninoService();

//
// Inclusion de los Middlewares
//
app.use(cors());                    // agrego el middleware de CORS
app.use(express.json());            // agrego el middleware para parsear y comprender JSON
app.use(express.static('public'));  // agrego el middleware de retornar archivos estaticos
app.use('/api/caninos', CaninoRouter); 

//
// Levanto el servidor WEB (pongo a escuchar)
//
app.listen(port, () => {
  console.log(`"server" Listening on port ${port}`);
});
