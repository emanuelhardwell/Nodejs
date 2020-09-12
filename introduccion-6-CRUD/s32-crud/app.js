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

/* Modelo*/
const Todo = mongoose.model("Todo", { text: String, completed: Boolean });

app.post("/add", (req, res) => {
  const toditos = new Todo({ text: req.body.nombre, completed: false });
  toditos
    .save()
    .then((doc) => {
      console.log("Elemento insertado correctamente", doc);
      res.json({ response: "Success Correcto" });
    })
    .catch((err) => {
      log("Error al insertar", err.message);
      res.status(400).json({ response: "Failed" });
    });
});

app.get("/getall", (req, res) => {
  Todo.find({}, "text completed")
    .then((doc) => res.json({ response: "Success", data: doc }))
    .catch((err) => {
      console.log("Error en la consulta ", err.message);
      res.status(400).json({ response: "Failed" });
    });
});

app.get("/complete/:id/:status", (req, res) => {
  let id = req.params.id;
  let status = (req.params.status = "true");

  Todo.findByIdAndUpdate(
    { _id: id },
    { $set: { completed: status } },
    { useFindAndModify: false }
  )
    .then((doc) => res.json({ response: "Success" }))
    .catch((error) => {
      console.log("Error al actualizar", error.message);
      res.status(400).json({ response: "Failed" });
    });
});

app.get("/delete/:id", (req, res) => {
  let id = req.params.id;

  Todo.findByIdAndDelete({ _id: id })
    .then((doc) => res.json({ response: "Success" }))
    .catch((error) => {
      console.log("Error al eliminar ", error.message);
      res.status(400).json({ response: "Failed" });
    });
});

app.listen(3000, () => console.log("Servidor iniciado ..."));
