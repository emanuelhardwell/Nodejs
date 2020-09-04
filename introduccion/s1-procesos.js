/*
 */
const parametros = (p) => {
  let index = process.argv.indexOf(p);
  return process.argv[index + 1];
};

const nombre = parametros("--name");
const edad = parametros("--age");

console.log(`Tu nombre es ${nombre}, y tienes ${edad} años de edad`);

/* En la terminal agregaras         --name "Emanuel" --age 25
 */

/* PROCESS.ARGV muestra la ruta de instalacion de NODE y la ruta donde estamos trabajando */
console.log(process.argv);
