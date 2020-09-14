/* 

*/
const container2 = document.getElementById("container2");

window.addEventListener("DOMContentLoaded", (e) => {
  fetch("http://localhost:3000/getall")
    .then((res) => res.json())
    .then((datos) => {
      if (datos.response === "Success") {
        /*  console.log(datos.data); */
        const data = datos.data;
        for (const iterator of data) {
          let divGeneralId = document.createElement("div");
          divGeneralId.classList.add("divGeneralId");
          divGeneralId.setAttribute("id", `${iterator._id}`);

          let divChecked = document.createElement("div");
          divChecked.classList.add("divChecked");

          let inputNombre = document.createElement("input");
          inputNombre.classList.add("check");
          inputNombre.setAttribute("type", "checkbox");
          inputNombre.setAttribute(
            "checked",
            `${iterator.completed === true ? "checked" : ""}`
          );

          let divTexto = document.createElement("div");
          divTexto.classList.add(
            `texto ${iterator.completed === true ? "completed" : ""}`
          );
          divTexto.textContent = `${iterator.text}`;

          let divAccion = document.createElement("div");
          divAccion.classList.add("divAccion");
          let a = document.createElement("a");
          a.setAttribute("href", `/delete/${iterator._id}`);
          div;
          a.textContent = "X";

          divChecked.append(inputNombre);
          divAccion.append(a);

          divGeneralId.append(divChecked);
          divgeneralId.append(divAccion);
          divGeneralId.append(divChecked);
        }
      } else {
        console.log("Response Failed");
      }
      container2.append(divGeneralId);
    })
    .catch((error) => {
      console.error(error.message);
    });
});
