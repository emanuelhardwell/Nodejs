/* 
 Crear directorios
*/

const fs = require("fs");

const carpetaCss = "s12-css";
const carpetaImg = "s12-img";

if (fs.existsSync(carpetaCss)) {
  console.log(`La carpeta ${carpetaCss} ya existe`);
} else {
  fs.mkdirSync(carpetaCss);
  console.log("Carpeta creada con exito");
}
