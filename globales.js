export const listaPalabras = ["ARREGLO", "RED", "DATOS", "EDITOR", "BUG", "EVENTO"];

for (var x=0; x<=localStorage.length-1; x++)  {  
    let clave = localStorage.key(x); 
    let valor = localStorage.getItem(clave);
    listaPalabras.push(valor).value;
}