/* 
    Las variables de entorno se utilizan para mayor seguridad, como lo son:
    --Puerto
    --Contraseña
    --Usuario     
    --Token
*/

/* instalacion
    npm init     (este comando se usa siempre)
    npm i dotenv -D     (-D es para que se guarde en los paquetes de desarrollo)
*/

/* 
    ===== NOTA =====
    el archivo ".env" no se sube a GITHUB
*/
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("http").createServer((req, res) =>
  res.send("Hola Soy Hardwell")
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Servidor escuchando en el puerto: ${PORT} `)
);

console.log(process.env.TOKEN);
