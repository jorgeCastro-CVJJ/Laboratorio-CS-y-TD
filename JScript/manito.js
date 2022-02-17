// variables, constantes consolas
/* JS es un lenguaje no-tipado, es decir, a comparación de C++ no necesita un compilador
la posibilidad de tener un erro es mayor debido a que muchas funciones se dan por asumpción 
*/


/* var y let son declarar variables*/

const personaje = "Mario";

console.log(personaje);
console.info(personaje);
console.warn(`${personaje} no es compatible`);
console.error(`Personaje ${personaje} no se encontró`)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//La siguiente linea de codigo mandaría un error porque la variable i desaparece en el ciclo for
//console.log(i);

for (let i =1; i <= 10; i++) {
    console.log(i);
}



const respuesta = confirm(`¿Estás seguro?`);
console.log(respuesta);

//Funciones tradicionales
function saltar () {
    console.log(`Mario salta`);
}

saltar;

//Funciones modernas

const correr = (personaje) => console.log(`${personaje} corre`)

correr(personaje);

//Arreglos
const personajes = ['Luigi'];
personaje.push(personaje);
personajes[2] = `Yoshi`;
personajes[10] = `Peach`;
personajes.length(personajes);

personajes.length = 5;

console.log(personajes);

personajes[`nivel`] = 1;

console.log(personajes);

document.getElementById("salida").innerHTML = "Aquí van las salidas del laboratorio";