import CaninoService from "./src/services/canino-services.js";
import caninoService from "./src/models/canino.js";
import express from "express";
import cors from "cors"
import router from "./src/controllers/caninoController.js";
// import bodyParser from 'body-parser';

let caninoService = new CaninoService();

const app = express();
const port = 3000;

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use(express.static('public'));

app.use("/Caninos", router)

app.listen(port, () => {
    console.log("Escuchando en el puerto " + port);
});
