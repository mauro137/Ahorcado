import { listaPalabras } from "./globales.js";
const letrasUsadas = [];
let munieco = [
  "<img src='imagenes/munieco/munieco_parte6_final.png'>",
  "<img src='imagenes/munieco/munieco_parte5.png'>",
  "<img src='imagenes/munieco/munieco_parte4.png'>",
  "<img src='imagenes/munieco/munieco_parte3.png'>",             
  "<img src='imagenes/munieco/munieco_parte2.png'>",
  "<img src='imagenes/munieco/munieco_parte1.png'>",    
];
let letraUsada = letrasUsadas.join("-");
var n = Math.floor(Math.random() * listaPalabras.length);
let palabra = listaPalabras[n];                                                 /* genera un numero random para elegir la palabra dentro del array */
let arrayChars = palabra.split("");                                             /*  la palabra elegida, se transforma en un array de caracteres para poder trabajar*/
let maskedPalabra = palabra.replace(/[A-Z]/g, "_").split("");                    /* cada caracter se transforma en guiones bajos y se imprimen en pantalla */
let intentos = 6;
let aciertos = arrayChars.length;
document.addEventListener("keypress", main);      

document.querySelector(".palabra").innerHTML = maskedPalabra.join(" ");

function main(event) {
  const teclaPresionada = event.key.toUpperCase();
  validarLetra(teclaPresionada);
  checkIntentos();
}
const validarLetra = (teclaPresionada) => {
  let charValido = true;
  try {
    if (teclaPresionada.match(/^[0-9]*$/)) {                          /* validaciones correspondiente que devuelve boolean acorde al resultado de la validacion */
      throw new Error("No se permiten numeros");
    }
    if (teclaPresionada.match(/^\W*$/)) {
      throw new Error("No se permiten caracteres especiales");
    }
    if (letrasUsadas.includes(teclaPresionada)) {
      throw new Error("Ya usaste esa letra -.-");
    }
  } catch (error) {
    alert(error);                                                   /* si no pasa la validacion, tira error, de lo contrario procede a buscar coincidencia en la palabra */
    charValido = false;
  }

  if (charValido) {
    buscarCoincidencia(teclaPresionada);
  } else {
  }
};
function buscarCoincidencia(teclaPresionada) {
  letrasUsadas.push(teclaPresionada);
  document.querySelector(".letras_usadas").innerHTML = letrasUsadas.join(" - ");    /* palabra agregada al historial de letras e impresa por pantalla */
  for (let index = 0; index < arrayChars.length; index++) {
    const letra = arrayChars[index];
    if (letra === teclaPresionada) {
      maskedPalabra.splice(index, 1, teclaPresionada);
      document.querySelector(".palabra").innerHTML = maskedPalabra.join(" ");
      aciertos--;
    } else {                                                                        /* recorre array de chars buscando coincidencia, actua operando aciertos y fallos */       
    }                                                                                       
  }
  if (palabra.includes(teclaPresionada) != true) {
    intentos--;
    document.querySelector(".munieco_box").innerHTML = munieco[intentos];
  }
}
const checkIntentos = () => {
  if (intentos == 0) {
    document.getElementById("msg_perdedor").style.display = "block";              /* check si gano, perdio o el juego continua. */
    document.removeEventListener("keypress", main);                               /*  deshabilita el evento keypress al finalizar le juego*/
  }
  if (aciertos == 0) {
    document.getElementById("msg_ganador").style.display = "block";
    document.removeEventListener("keypress", main);
  } else {
  }
};
