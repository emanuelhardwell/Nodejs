/* 
 Express Rutas 
*/

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Se encuantra en el directorio RAIZ");
});

app.get("/home", (req, res) => {
  res.end("Se encuantra en el directorio HOME");
});

app.get("/about", (req, res) => {
  res.end("Se encuantra en el directorio ABOUT (Sobre Mi)");
});

app.get("/*", (req, res) => {
  res.end("ERROR 404 ..................");
});

app.listen(3000, () => {
  console.log("Server Iniciado ............");
});
