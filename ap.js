import { listaPalabras } from "./globales.js";
let btnGuardar = document.querySelector("#enviar");

btnGuardar.addEventListener("click", setPalabra);

function setPalabra() {
  var nuevaPalabra = document.getElementById("new_word").value.toUpperCase();
  validarPalabra(nuevaPalabra);
}

function validarPalabra(nuevaPalabra) {
  let boolean = true;
  try {
    if (nuevaPalabra.length < 2 || nuevaPalabra.length > 8) {           /* validacion de palabra */
      throw new Error("min 2, max 8 caracteres");
    }
    if (nuevaPalabra.match(/^[0-9]*$/)) {
      throw new Error("No se permiten numeros");
    }
    if (nuevaPalabra.match(/^\W*$/)) {
      throw new Error("No se permiten caracteres especiales");
    }
    if (listaPalabras.includes(nuevaPalabra)) {
      throw new Error("esa palabra ya se encuentra en la lista");
    }
  } catch (error) {
    alert(error);
    boolean = false;
  }

  if (!boolean) {
  } else {                                                          /* se usa local storage para guardar las palabras ingresadas por el usuario */
    localStorage.setItem(nuevaPalabra, nuevaPalabra);
    alert("palabra guardada exitosamente!");
  }
}
