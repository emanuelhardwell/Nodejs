/* Motor de plantilla PUG */

/* npm i pug */

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Plantilla PUG",
    nombre: "emanuel",
    apellido: "vasquez",
  });
});

app.listen(3000, () => console.log("Servidor iniciado ......"));
