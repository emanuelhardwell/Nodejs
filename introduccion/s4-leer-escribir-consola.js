/* 
PROCESS es un objeto global */

let preguntas = [
  "¿Cual es tu nombre?",
  "¿cual es tu apellido?",
  "¿Cuantos años tienes?",
];

let respuestas = [];

const question = (i) => {
  process.stdout.write(preguntas[i]);
};

process.stdin.on("data", (data) => {
  respuestas.push(data.toString().trim());

  if (respuestas.length < preguntas.length) {
    question(respuestas.length);
  } else {
    process.exit();
  }
});

question(0);
