var palabra = "palabra";
var chars = palabra.split("");
var intentosRestantes = 6;
var aciertos = chars.length;
document.addEventListener("keypress", controlador);

function controlador(event) {
  const teclaPresionada = event.key.toLowerCase();
  for (let index = 0; index < chars.length; index++) {
    const element = chars[index];
    if (element === teclaPresionada) {
      aciertos--;
    } else {
    }
  }
  if (chars.includes(teclaPresionada) != true) {
    intentosRestantes--;
  }
  console.log("TIENES", intentosRestantes, "INTENTOS RESTANTES");
  console.log("DEBES DESCUBRIR", aciertos, "LETRAS MAS PARA GANAR");
}
