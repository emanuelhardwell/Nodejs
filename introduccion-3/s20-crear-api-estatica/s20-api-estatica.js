/* 
API estatica
*/

const http = require("http");

const ordenes = [
  { nombre: "sopa", cantidad: 2, estado: "servido", mesa: 5 },
  { nombre: "corte de carne", cantidad: 2, estado: "proceso", mesa: 4 },
  { nombre: "sopa", cantidad: 1, estado: "pagado", mesa: 3 },
  { nombre: "ensalada", cantidad: 1, estado: "pagado", mesa: 5 },
  { nombre: "pasta", cantidad: 4, estado: "en proceso", mesa: 1 },
];

http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.writeHead(200, { "content-type": "text/json" });
      res.end(JSON.stringify(ordenes));
    } else if (req.url == "/estado") {
      buscarEstado("pagado", res);
    } else if (req.url == "/nombre") {
      buscarNombre("sopa", res);
    } else {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("No se encontro la solicitud requerida");
    }
  })
  .listen(3000);

console.log("Server corriendo ...");

/* Métodos */
const buscarEstado = (estado, res) => {
  const resultado = ordenes.filter((palabra) => {
    return palabra.estado === estado;
  });
  res.writeHead(200, { "content-type": "text/json" });
  res.end(JSON.stringify(resultado));
};

const buscarNombre = (nombre, res) => {
  const resultado = ordenes.filter((palabra) => {
    return palabra.nombre === nombre;
  });
  res.writeHead(200, { "content-type": "text/json" });
  res.end(JSON.stringify(resultado));
};
