/* 
=== Reiniciar Servidor Automaticamente ===

instalacion del modulo : npm install -g node-dev

=== tambien existe otro modulo que hace lo mismo: ===

npm install -g nodemon
*/

const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Reiniciar Servidor Automaticamente</title>
    </head>
    <body>
      <h3>Reiniciar Servidor Automaticamente</h3>
      <p>Se reinicia correctamente el servidor .... Es exitante !!!!!!! </P>
    </body>
  </html>
  `);
  })
  .listen(3000);

console.log("Servidor iniciado .........");

/* Para Reiniciar automaticamente el servidor usamos el siguiente comando en la terminal:
    node-dev "NombreArchivo"
*/

/* nodemon "NombreArchivo" */