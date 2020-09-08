/* 
https://www.npmjs.com/package/body-parser
*/

const express = require("express");
const bodParser = require("body-parser");

const app = express();

const urlenCodeParser = bodParser.urlencoded({ extended: false });

app.get("/", urlenCodeParser, (req, res) => {
  /*  */
  res.send(`<h1> Tus datos son ---> <br/> 
  Nombre: ${req.query.nombre} <br/>
  Apellido: ${req.query.apellido} 
  </h1> `);
  console.log(req.query);
});

app.listen(3000, () => {
  console.log("Servidor iniciado .....................");
});

/* 
    http://localhost:3000/?nombre=emanuel&apellido=vasquez
*/
