import express from "express";
import cors from "cors";
import CaninoRouter from "./src/controllers/caninoController.js";
import UsuarioRouter from "./src/controllers/usuarioController.js";


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api/caninos/', CaninoRouter);
app.use('/api/caninos/usuario/', UsuarioRouter);


app.listen(port, () => {
  console.log(`"server" Listening on port ${port}`);
});