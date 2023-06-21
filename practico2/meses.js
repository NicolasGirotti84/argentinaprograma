const readlineSync = require('readline-sync');
let numMes = readlineSync.question("Ingrese un mes del año(numero entero): ");

let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let cantidadDeDias = 31;

if (numMes === 2) {
	cantidadDeDias = 28;
}else if (numMes === 4 || numMes === 6 || numMes === 9 || numMes === 11){
	cantidadDeDias = 30;
}

console.log("La cantidad de dias del mes de "+mes[numMes-1]+" es "+cantidadDeDias);

