/* MODULOS
 */

let path = require("path");
console.log(path.dirname(__dirname));
console.log(path.dirname(__filename));
console.log(path.basename(__dirname));
console.log(path.basename(__filename));

/*  */
let frutas = ["fresa", "mango", "kiwi", "naranja", "cereza"];

console.log(path.join(...frutas));
