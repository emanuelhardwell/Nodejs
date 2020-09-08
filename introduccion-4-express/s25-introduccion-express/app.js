/* 
    Introducciona EXPRESS
*/

const express = require("express");

let app = express(); /* inicializ express */

app.use(express.static("public/"));
app.listen(3000);
console.log("Express Inicializado ............");
