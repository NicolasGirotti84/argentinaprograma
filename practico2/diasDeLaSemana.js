const readlineSync = require('readline-sync');
let numDia = readlineSync.question("Ingrese un numero del 1 al 7: ");

let num = Number(numDia);

switch (num){
	case 1: 
		console.log("Hoy es Lunes");
		break;
	case 2:
		console.log("Hoy es Martes");
		break;
	case 3: 
		console.log("Hoy es Miercoles");
		break;
	case 4:
		console.log("Hoy es Jueves");
		break;
	case 5: 
		console.log("Hoy es Viernes");
		break;
	case 6:
		console.log("Hoy es Sabado");
		break;
	case 7:
		console.log("Hoy es Domingo");
		break;
	default:
		console.log("Numero Invalido");
}