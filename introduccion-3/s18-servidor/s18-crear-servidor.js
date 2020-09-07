/* 
Crear un servidor
*/

/* const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hola Mundo !!!!");
  })
  .listen(3000);

console.log("Servidor Creado"); */

/* =============  Si queremos que devuelva una pagina web ================*/
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Index</title>
      </head>
      <body>
        <h1>Crear Servidor desde NodeJS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam
          maiores nulla perferendis voluptatibus, voluptatum recusandae
          exercitationem, quos aliquid nostrum doloribus. Consequuntur reprehenderit
          optio eius temporibus repudiandae incidunt, iste vel.
        </p>
      </body>
    </html>
    `);
  })
  .listen(3000);

console.log("Servidor Creado");
