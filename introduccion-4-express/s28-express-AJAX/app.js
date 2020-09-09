/* 
    Express with AJAX
*/

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

/* app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html ");
  res.sendFile("/public/index.html");
}); */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.post("/new", (req, res) => {
  res.setHeader("Content-Type", "text/plain ");
  let { pelicula, calificacion } = req.body;

  //abrir archivo
  let file = fs.readFileSync("peliculas.json", "utf8");

  //convertirlo a un arreglo
  let json = JSON.parse(file);

  //insertar un nuevo elemento
  json.peliculas.push({ pelicula: pelicula, calificacion: calificacion });

  //guardar json en el archivo
  file = fs.writeFileSync("peliculas.json", JSON.stringify(json));

  /*  */
  res.setHeader("Content-type", "html/plain");
  res.send("Datos guardados correctamente ...");
});

app.get("/get-peliculas", (req, res) => {
  const file = fs.readFileSync("peliculas.json", "utf8");
  /*  console.log(file); */
  res.setHeader("Content-Type", "text/json ");
  res.send(file);
});

app.listen(4000, () => {
  console.log("Servidor Iniciado ..........");
});
