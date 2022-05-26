const listaPalabras = ["ARREGLO", "RED", "DATOS", "EDITOR", "BUG", "EVENTO"];
const letrasUsadas = [];
n = Math.floor(Math.random() * listaPalabras.length);
let palabra = listaPalabras[n];
let arrayChars = palabra.split("");
let maskedPalabra = palabra.replace(/[A-Z]/g, "_").split("");
let intentos = 7;
let aciertos = arrayChars.length;

document.querySelector(".palabra").innerHTML = maskedPalabra.join(" ");
document.addEventListener("keypress", main);



function main(event,charValido) {
  const teclaPresionada = event.key.toUpperCase();
  validarLetra(teclaPresionada);
  if (charValido) {
    buscarCoincidencia(teclaPresionada);
    console.log("valido")
    /* checkIntentos(intentos,aciertos); */
  } else {
    console.log("invalido")
  }
}
function validarLetra  (teclaPresionada) {
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
  return charValido;
};

function buscarCoincidencia (teclaPresionada) {
  letrasUsadas.push(teclaPresionada);
  for (let index = 0; index < arrayChars.length; index++) {
    const letra = arrayChars[index];
    if (letra === teclaPresionada) {
      console.log('acertaste')
      maskedPalabra.splice(index,1,teclaPresionada)
      aciertos--;
      
    } else {
      intentos--;
      console.log('fallaste')
    }
  }
};

const checkIntentos = (intentos,aciertos) =>{
  if (condition) {
    
  }
/*  */
  /* deshabilitar evento al finalizar juego*/
}


