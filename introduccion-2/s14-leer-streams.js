/* 

*/

const fs = require("fs");

const archivo = "s14-logs.log";

/* ASI NO SE DEBE LEER */
let contenido = fs.readFileSync(archivo);
console.log(`Tamaño: ${contenido.length}`);

/* ASI SE DEBE LEER CUANDO QUEREMOS QUE SE LEEE POCO POR POCO...
COMO CUANDO VEMOS UN VIDEO DE YOUTUBE VA CARGANDO */

let streams = fs.createReadStream(archivo);

let arreglo = "";

streams.once("data", () => {
  console.log("Iniciando el Streams .....");
});

streams.on("data", (pedazos) => {
  console.log(`${pedazos.length} |`);
  arreglo += pedazos;
});

streams.on("end", () => {
  console.log("A finalizado el Streams .....");
  console.log(arreglo.length);
});
