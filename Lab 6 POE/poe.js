function password() {
    contraseña = document.getElementById("contraseña").value;
    confirmar = document.getElementById("confirmar").value;

    if (contraseña == confirmar) {
        document.getElementById("valor").innerHTML = 'Las contraseñas son iguales';
    }
    else document.getElementById("valor").innerHTML = 'Las contraseñas no son iguales';

}

function addOne() {
    paresBotas = document.getElementById("contadorP3").value;
    paresBotas = ++paresBotas;
    document.getElementById("contadorP3").innerHTML = paresBotas;
}

function carrito() {

}

function subOne() {
    costo_producto = 0; 
    carrito = 0;
    total = 0;
}

function precioTotal() {

}

