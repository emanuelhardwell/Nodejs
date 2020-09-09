/* 
Frontend
*/
const bSumit = document.querySelector("#boton");

loadPeliculas();

bSumit.addEventListener("click", () => {
  const pelicula = document.querySelector("#pelicula").value;
  const calificacion = document.querySelector("#calificacion").value;

  if (pelicula.trim() === "" || calificacion.trim() === "") return false;

  /* Mandar solicitud POST a /new */
  fetch("/new", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pelicula: pelicula, calificacion: calificacion }),
    // body data type must match "Content-Type" header)
  })
    .then((res) => res.text())
    .then((data) => {
      // mostrar mensaje de error / exito
      alert(data);
      //actualizar lista de peliculas
      loadPeliculas();
    });
});

function loadPeliculas() {
  fetch("/get-peliculas", { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      const peliculas = document.querySelector("#contenedor-peliculas");
      let html = "";
      data.peliculas.forEach((element) => {
        html += `<div>${element.pelicula}   <img src="img/star.png" width="16" />  --- ${element.calificacion}</div>`;
      });
      peliculas.innerHTML = html;
    });
}
