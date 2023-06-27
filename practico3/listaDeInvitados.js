let personas = ['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro', 'Emilia'];
let aceptados=[];
let rechazados=[];

for (var i = 0; i < personas.length; i++) {
	if (personas[i] === 'Jose' || personas[i] === 'Sofia'){
		rechazados.push(personas[i]);
	}else{
		aceptados.push(personas[i]);
	}
}

aceptados.sort();
rechazados.sort();

console.log('La lista ordenada de invitados aceptados es: ');
for (var j = 0; j < aceptados.length; j++) {
	console.log(aceptados[j]);
}

console.log();

console.log('La lista ordenada de invitados rechazados es: ');
for (var k = 0; k < rechazados.length; k++) {
	console.log(rechazados[k]);
}
console.log();