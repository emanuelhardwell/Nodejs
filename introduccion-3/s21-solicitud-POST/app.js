/* 
Solicitud POST
*/

const http = require("http");
const fs = require("fs");

/* PIPE es para partirlo en pedazos */
http
  .createServer((req, res) => {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream("./index.html", "utf-8").pipe(res);
    
    } else if (req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title> Respuesta </title>
          </head>
          <body>
            <h3> Respuesta: </h3>
            <p> ${body} </p>
          </body>
        </html>`);
      });
    }
  })
  .listen(3000);

console.log("Servidor iniciado ...");
