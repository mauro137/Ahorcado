const listaPalabras = ["ARREGLO", "RED", "DATOS", "EDITOR", "BUG", "EVENTO"];
const letrasUsadas = [];
let munieco = [
  "<img src='/imagenes/munieco/munieco_parte6_final.png'>",
  "<img src='/imagenes/munieco/munieco_parte5.png'>",
  "<img src='/imagenes/munieco/munieco_parte4.png'>",
  "<img src='/imagenes/munieco/munieco_parte3.png'>",
  "<img src='/imagenes/munieco/munieco_parte2.png'>",
  "<img src='/imagenes/munieco/munieco_parte1.png'>",
];
let letraUsada = letrasUsadas.join("-");
n = Math.floor(Math.random() * listaPalabras.length);
let palabra = listaPalabras[n];
let arrayChars = palabra.split("");
let maskedPalabra = palabra.replace(/[A-Z]/g, "_").split("");
let intentos = 6;
let aciertos = arrayChars.length;

document.querySelector(".palabra").innerHTML = maskedPalabra.join(" ");
document.addEventListener("keypress", main);

console.log(palabra);

function main(event) {
  const teclaPresionada = event.key.toUpperCase();
  validarLetra(teclaPresionada);
  checkIntentos();
}
const validarLetra = (teclaPresionada) => {
  let charValido = true;
  try {
    if (teclaPresionada.match(/^[0-9]*$/)) {
      throw new Error("No se permiten numeros");
    }
    if (teclaPresionada.match(/^\W*$/)) {
      throw new Error("No se permiten caracteres especiales");
    }
    if (letrasUsadas.includes(teclaPresionada)) {
      throw new Error("Ya usaste esa letra -.-");
    }
  } catch (error) {
    alert(error);
    charValido = false;
  }

  if (charValido) {
    buscarCoincidencia(teclaPresionada);
  } else {
  }
};
function buscarCoincidencia(teclaPresionada) {
  letrasUsadas.push(teclaPresionada);
  document.querySelector(".letras_usadas").innerHTML = letrasUsadas.join(" - ");
  for (let index = 0; index < arrayChars.length; index++) {
    const letra = arrayChars[index];
    if (letra === teclaPresionada) {
      maskedPalabra.splice(index, 1, teclaPresionada);
      document.querySelector(".palabra").innerHTML = maskedPalabra.join(" ");
      aciertos--;
    } else {
    }
  }
  if (palabra.includes(teclaPresionada) != true) {
    intentos--;
    document.querySelector(".munieco_box").innerHTML = munieco[intentos];
    console.log("fallaste");
  }
}
const checkIntentos = () => {
  if (intentos == 0) {
    console.log("perdiste");
    document.removeEventListener("keypress", main);
  }
  if (aciertos == 0) {
    console.log("ganaste");
    document.removeEventListener("keypress", main);
  } else {
  }
};
