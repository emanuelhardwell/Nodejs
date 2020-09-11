/* 
npm init

npm i express mongoose
"Es una capa de abstraccion que se le agrega ... y asi es más facil hacer las operaciones"

## podemos usar 2 modulos para que se reinicie el servidor ##
node-dev 
nodemon 
*/

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://emanuel:hardwell100@localhost:27017/todos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conexion = mongoose.connection;
//se crean 2 eventos
conexion.once("open", () => console.log("conexion Abierta"));
conexion.on("error", (e) => console.log("Error en la conexion", e));

app.get("/", (req, res) => {
  res.json({ response: "Success Corecto" });
});

app.listen(3000, () => console.log("Servidor iniciado ..."));
