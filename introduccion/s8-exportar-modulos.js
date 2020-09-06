/*

*/

/* FORMA 1 DE IMPORTAR CUANDO HAY MÁS DE 2 OBJETOS O METODOS   */
let frutas = require("./exportar-modulos/arrayColor");
console.log(frutas.colores);
console.log(frutas.frutas);

/* Extraigo unicamente el array de frutas de mi archivo ARRAYCOLOR.JS */
let recorrerFrutas = frutas.frutas;
recorrerFrutas.forEach((fruta, index) => {
  console.log(`id: ${index}, fruta: ${fruta} `);
});


/*  */
const domicilio = require("../domicilio");

let resultado = domicilio.domicilio(
  "Tlacolula",
  200,
  "Estado de Oaxaca",
  "Oaxaca",
  "México"
);

console.log(resultado);

/* FORMA 2 DE IMPORTAR CUANDO HAY MÁS DE 2 OBJETOS O METODOS   */
let { person, carrera } = require("./exportar-modulos/lib/persona");

console.log(person);
console.log(carrera);
