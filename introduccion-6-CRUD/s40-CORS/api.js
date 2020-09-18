/* 
   el poder manipular el CROS ORIGIN,
    para que podamos permitir a nuestros recursos que sean accedido de diferentes dominios o de una lista especifica de dominios en la lista blanca 

*/

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

let listaBlanca = ["http://localhost:3000"];

let corsOpciones = {
  origin: (origin, callback) => {
    if (listaBlanca.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por el CORS"));
    }
  },
};

/* app.get("/", (req, res) => { */
app.get("/", cors(corsOpciones), (req, res) => {
  res.json({ mensaje: "OKKKKKKKKKKK" });
});

app.listen(3001, () => console.log("API iniciada --------"));
