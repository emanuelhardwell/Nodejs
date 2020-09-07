/* 
    Node Package Manager (NPM)
*/

const underscore = require("underscore");

const persona = [
  { id: 1, nombre: "Emanuel", edad: 24, semestre: 9 },
  { id: 2, nombre: "Juan", edad: 22, semestre: 9 },
  { id: 3, nombre: "Josue", edad: 24, semestre: 5 },
  { id: 4, nombre: "Shalom", edad: 17, semestre: 6 },
];

const resultado = underscore.findWhere(persona, { id: 3 });
console.log(resultado);
