/* 

*/
const proceso = require("child_process").exec;

let num1 = 10;
let num2 = 5;

proceso("./s9-script.sh " + num1 + " " + num2, (error, stdout) => {
  if (error) {
    console.log("Error Error Error Error");
    throw error;
  } else {
    console.log("Acertado");
    console.log(stdout);
  }
});
