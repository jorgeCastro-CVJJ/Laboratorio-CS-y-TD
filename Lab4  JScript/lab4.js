
/* Función contador.
* Recibe un número mediante un prompt.
* Calcula el cuadrado y cubo de cada num 1->n.
*/
function potencias() {
    let num = prompt("Ingresa hasta que número deseas obtener información", "10");
    if (num != null) {
        str = "";
        for (let i = 0; i < num; i++) {
            cuadrado = (i + 1) * (i + 1);
            cubo = (i + 1) * (i + 1) * (i + 1);
            str = str + `${i+1}.- Su cuadrado es: ${cuadrado}  |  Su cubo es: ${cubo} <br>`
            }
    document.getElementById("potencias").innerHTML = str;  
    }
}

/*Entrada: Usando un prompt se pide el resultado de la suma de 2 números 
* generados de manera aleatoria. Salida: La página debe indicar si el resultado 
* fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respues
*/

function resultado_prompt(){
    inicio = new Date();
    primerN = Math.floor(Math.random() * 10);
    segundoN = Math.floor(Math.random() * 10);
    let pregunta = prompt(`¿Cual es la suma de ${primerN} + ${segundoN}?`);

    suma = primerN + segundoN;
    document.getElementById("instruccion").innerHTML = pregunta;
    
    if (pregunta != null){
        fin = new Date();
        
        if (pregunta == suma){
            str = `Correcto! el resultado es: ${suma}`;
        }
        else {
            str = `Incorrecto! :( el resultado era: ${suma}`;
        }
        var tiempo = fin - inicio;
        tiempo /= 1000;

        var segundos = Math.round(tiempo)
        document.getElementById("resultado_prompt").innerHTML = str + `<br> te tardaste ${segundos} 
        segundos en responder la pregunta :)`;
    } 
}

/* Funcion contador.
* Recibe un arreglo.
* responde la cantidad de num < 0, num > 0 y # de 0.
*/
const array = [-2,-58,0,0,0,0,1,2,3,5,6,7,8];
function contador(array){
    let positive = 0; 
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > 0) {
            positive += 1;
        }
        else if (array[i] < 0){
            negative += 1;
        }
        else {
            zero += 1;
        }
    }
    msg = `Negativos: ${negative} Ceros: ${zero} Positivos: ${positive}`
    alert(msg);
    document.getElementById("arreglo").innerHTML = `el arreglo es: ${array}`;
    document.getElementById("contador").innerHTML = msg;
}

/* Funcion promedios.
* Recibe arreglo de arreglos
* Regresa una arreglo de los promedios de los renglones de la matriz
*/
const arrayOfArrays = [[10,3,4,2,6,8],[3,7,1,77,34,5],[90,23,5,2,6,3],[83,45,23,4,12,85],[43,12,22,61,7,9]]
function promedios() {
    let i = 0;
    let suma = 0;
    let index = arrayOfArrays[i];
    let str = "";
    for (i; i < arrayOfArrays.length;i++){
        for (let j = 0; j < index.length; j++){
            suma = suma + index[j];
        }
        promedio = suma/index.length;
        console.log(i+1);
        str = str + `La fila numero ${i+1} tiene un promedio de: ${promedio} <br>`
    }
    document.getElementById("promedios").innerHTML = str;
    
}
