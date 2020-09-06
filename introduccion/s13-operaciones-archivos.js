/* 
operaciones archivos (renombrar. mover y eliminar)
*/

const fs = require("fs");

const texto = "s13-texto.txt";
const textoNew = "s13-textoNew.txt";
const css = "s13-css.css";
const cssNewDirectorio = "./s13-operaciones/s13-css.css";
const conf = "./s13-operaciones/texto.conf";

/* Renombrar archivo */
if (fs.existsSync(texto)) {
  fs.renameSync(texto, textoNew);
  console.log("El archivo se ha renombrado");
} else {
  console.log("El archivo no existe");
}

/* Mover archivo de directorio */
if (fs.existsSync(css)) {
  fs.renameSync(css, cssNewDirectorio);
  console.log("El archivo se ha movido de directorio");
} else {
  console.log("El archivo no se ha podido mover");
}

/* Eliminar archivo */
if (fs.existsSync(conf)) {
  fs.unlinkSync(conf);
  console.log("El archivo se ha eliminado");
} else {
  console.log("El archivo no se ha podido eliminar");
}
