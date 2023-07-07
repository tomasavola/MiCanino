import express from "express";
import cors from "cors";
import CaninoRouter from "./src/controllers/caninoController.js";
import UsuarioRouter from "./src/controllers/usuarioController.js";
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use('/api/caninos/', CaninoRouter);
app.use('/api/caninos/usuario/', UsuarioRouter);

const credentials = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'samus'
};

app.get('/', (req, res) => {
  res.send('hola desde tu primera ruta de la Api');
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const values = [username, password];
  var connection = mysql.createConnection(credentials);
  connection.query("SELECT * FROM login WHERE username = ? AND password = ?", values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
        res.status(200).send({
          "id": result[0].id,
          "user": result[0].user,
          "username": result[0].username
        });
      } else {
        res.status(400).send('Usuario no existe');
      }
    }
  });
  connection.end();
});

app.listen(port, () => {
  console.log(`"server" Listening on port ${port}`);
});