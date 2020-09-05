/* const events = require("events");
const emitter = new events.EventEmitter();

emitter.on("eventoPropio", (mensaje, status) => {
  let resultado = `Status: ${status},  Mensaje: ${mensaje}`;
  console.log(resultado);
});

emitter.emit("eventoPropio", "Todo bien, Todo correcto", 200); */

/* vamos a heredar el EMMITER */

const eventEmitter = require("events").EventEmitter;
const util = require("util");

let persona = function (nombre) {
  this.nombre = nombre;
};

/* Se realiza una herencia */
util.inherits(persona, eventEmitter);

let personaPro = new persona("Hardwell");

personaPro.on("eventoPropio", (mensaje, status) => {
  let resultado = `Persona: ${personaPro.nombre} , Status: ${status},  Mensaje: ${mensaje}`;
  console.log(resultado);
});

personaPro.emit(
  "eventoPropio",
  "Todo bien, Todo correcto y yo que me alegro",
  200
);
