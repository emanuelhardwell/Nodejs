/*
 leer archivos desde Node Js con FILESYSTEM (FS)
 */

const fs = require("fs");

/* Syncrono */
let archivo = fs.readFileSync("./s10-texto.txt", "utf8");
console.log(archivo);

/* Asyncrono */

fs.readFile("s10-texto-asyncrono.txt", "utf8", (error, file) => {
  if (error) {
    console.log("Error encontrado ***************");
  }

  console.log(file);
});
