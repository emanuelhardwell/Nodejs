/* 

*/

/* const http = require("http");

const opciones = {
  hostname: "https://jsonplaceholder.typicode.com/users",
  port: 80,
  path: "",
  method: "GET",
};

const conexion = http.request(opciones, (res) => {
  console.log(`Status  Code: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  res.setEncoding("utf8");

  res.on("data", (pedazos) => {
    console.log(`Body: ${pedazos}`);
  });

  res.on("end", () => {
    console.log("Ya no hay mas datos");
  });
});

conexion.on("error", (error) => {
  console.error(error.message);
});

conexion.end((e) => {
  console.log("Finalizado");
});
 */

const https = require("https");

https
  .get("https://jsonplaceholder.typicode.com/users", function (response) {
    response.setEncoding("utf8");
    response.on("data", console.log);
    response.on("error", console.error);
  })
  .on("error", console.error);
