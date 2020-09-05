/*
 */

let readline = require("readline");
let util = require("util");

let persona = {
  nombre: "",
  comentarios: [],
};

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("¿Cúal es tu nombre?: ", (respuesta) => {
  persona.nombre = respuesta;

  rl.setPrompt("Dime un comentario: ");
  rl.prompt();
});

rl.on("line", (input) => {
  if (input.trim() === "salir") {
    let resultado = util.format(
      "Te llamas %s y esto comentarios me asignaste: %j",
      persona.nombre,
      persona.comentarios
    );
    console.log(resultado);
    process.exit();
  } else {
    persona.comentarios.push(input.trim());

    rl.setPrompt("Dime un comentario más: ");
    rl.prompt();
  }
});
