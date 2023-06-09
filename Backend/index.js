// npm run server
import express from "express";
import cors    from "cors";
import CaninoService from "./src/services/canino-services.js";

//
// Variables/Constantes del Modulo
//
const app  = express();
const port = 5000;                  // Puerto en donde levanta express (5000)
const caninoService = new CaninoService();

//
// Inclusion de los Middlewares
//
app.use(cors());                    // agrego el middleware de CORS
app.use(express.json());            // agrego el middleware para parsear y comprender JSON
app.use(express.static('public'));  // agrego el middleware de retornar archivos estaticos

// 
// Endpoints
//
/*
app.get('/api/caninos', async (req, res) => {
  console.log('Estoy en: caninoController get /');
  
  const caninos = await caninoService.getAll();

  //return res.status(StatusCodes.OK).json(caninos);
  return res.status(200).json(caninos);
});

app.get('/api/caninos/:id', async (req, res) => {
  console.log('Estoy en: caninoController get /:id', req.params.id);
  let respuesta;
  
  const pizza = await caninoService.getById(req.params.id);
  console.log('pizza', pizza);
  if (pizza!=null){
    console.log('1');
    respuesta = res.status(200).json(pizza);
  } else {
    console.log('2');
    respuesta = res.status(404).send("No se encontro la Pizza.");
  }

  return respuesta;
});
*/
app.post('/api/caninos/insert', async (req, res) => {
  console.log('Estoy en: caninoController post /', req.body);

  const canino = await caninoService.insert(req.body);

  return res.status(201).json(canino);
});
/*
app.put('/api/pizzas/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log('Estoy en: pizzaController put /:id');

  const pizza = await pizzaService.update(req.body);

  return res.status(200).json(pizza);
});

app.delete('/api/pizzas/:id', async (req, res) => {
  console.log('Estoy en: pizzaController delete /:id', req.params.id);

  const pizza = await pizzaService.deleteById(req.params.id);

  return res.status(200).json(pizza);
});
*/
//
// Levanto el servidor WEB (pongo a escuchar)
//
app.listen(port, () => {
  console.log(`"server" Listening on port ${port}`);
});
