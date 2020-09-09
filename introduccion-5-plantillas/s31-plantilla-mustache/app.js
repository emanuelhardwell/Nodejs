/* 
Motor de plantilla mustache

npm install mustache-express
*/

const express = require("express");
const bodyParser = require("body-parser");
const mustache = require("mustache-express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine(".mustache", mustache());
app.set("view engine", "mustache");

app.get("/", (req, res) => {
  let carreras = [
    { carrera: "Ing Sistemas", semestre: 5, promedio: 9 },
    { carrera: "Ing Quimica", semestre: 4, promedio: 8 },
    { carrera: "Ing Industrial", semestre: 3, promedio: 7 },
    { carrera: "Ing Civil", semestre: 2, promedio: 7 },
  ];

  res.render("index", {
    nombre: "Emanuel",
    edad: 24,
    datos: carreras,
  });
});

app.listen(3000, () => console.log("Serverdidor iniciado ....."));
