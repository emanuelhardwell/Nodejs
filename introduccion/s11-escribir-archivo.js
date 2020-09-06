/* 
Escribir archivos:

*/

const fs = require("fs");
const archivo = "s11-texto.txt";

/* verificar si el archivo existe 1 */
if (fs.existsSync(archivo)) {
  console.log("El archivo EXISTE");
} else {
  console.log("El archivo no existe");
}

/* verificar si el archivo existe 2 con callback*/
fs.access(archivo, fs.constants.F_OK, (error) => {
  if (error) {
    console.log("El archivo no existe");
  } else {
    console.log("El archivo EXISTE");
  }
});

/*  */

let textoArchivo = " i am hardwell, i am form Canada and i am stetic";
let textoArchivoNew = "\n I AM HARDWELL. I AM FROM CANADA AND I AM STETIC";

/* fs.writeFile(archivo, textoArchivo, (error) => {
  if (error) {
    console.log("No existe ese archivo");
  } else {
    console.log("Archivo creado con exito");
  }
}); */

fs.appendFile(archivo, textoArchivoNew, (error) => {
  if (error) {
    console.log("No se a podido actualizar el archivo");
  } else {
    console.log("Archivo actualizado con exito");
  }
});
