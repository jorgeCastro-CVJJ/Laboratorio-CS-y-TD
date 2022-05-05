//función para ahorrar codigo [document.getElementById() = __()];
function __(id){
    return document.getElementById(id);
}



//Para cambiar la letra cuando pases el mouse sobre ella (Preguntas a responder)
function Llegar(id) {
	id.style.fontFamily= "Lucida Console";
}
function Salir(id) {
	id.style.fontFamily= "Arial";
}

  //Validar contraseña (Contraseñas iguales)

function validarContraseña() {
    var pass = __('pass').value,
        pass2 = __('pass2').value;
    if(pass != '' && pass2 != ''){
        if(pass != pass2){
            //si las contraseñas no coinciden
            __('resultado').innerHTML = '<p class="error"><strong>Error: </strong>¡Las contraseñas no coinciden!</p>';
        } else {
            //Si todo esta correcto 
        __('form').innerHTML = '<p class="correcto"><strong>✓ Correcto: </strong>Los datos son correctos :)</p>';
        }
    } else {
      //si los campos o uno, este vacio
        __('resultado').innerHTML = '<p class="error"><strong>Error: </strong>¡Los campos no deben estar vacios!</p>';
    } 
}

  //enviar formulario con la tecla ENTER
function enterEnviar(event){
    if(event.keyCode == 13){
        validarContraseña()
    }
}


// Función para ver la seguridad de una contraseña
function fuerzaPassword() {
    var strength = __('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Escribe tu contraseña';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'Contraseña mínima de 8 caracteres';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Fuerte!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Media!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Débil!</span>';
    }
}



//Función agregar zapatos de vestir
__('purchase_vestir').onclick = () => {
    __('vestir').value = Number(__('vestir').value) + 1;
    let respuesta = "";
    let precio = 600* __('vestir').value;

    if(__('vestir').value > 0){
        respuesta += "<table><tr><th>Zapatos de Vestir</th><td>" + __('vestir').value +"</td><td>$" + precio + "</td></tr><table>";
    }
    __('cart_vestir').innerHTML = respuesta;
    return precio

}

//Función agregar botas
__('purchase_botas').onclick = () => {

    __('botas').value = Number(__('botas').value) + 1;

    let precio = 10* __('botas').value
    let respuesta = "";

    if(__('botas').value > 0){
        respuesta += "<table><tr><th>Botas</th><td>" + __('botas').value +"</td><td>$" + precio + "</td></tr><table>";
    }
    __('cart_botas').innerHTML = respuesta;
    return precio

}

//Función agregar aguas de tenis
__('purchase_tenis').onclick = () => {

    __('tenis').value = Number(__('tenis').value) + 1;

  let precio = 15 * __('tenis').value
    let respuesta = "";

    if(__('tenis').value > 0){
    respuesta += "<table><tr><th>Tenis</th><td>" + __('tenis').value +"</td><td>$" + precio + "</td></tr><table>";
    }
    else if(__('tenis').value == 0){
    respuesta += "<table><tr><th>Tenis</th><td>0</td><td>$0</td></tr><table>";
    }


    __('cart_teniss').innerHTML = respuesta;
    
}

//Para vaciar carrito
// __('vaciar_car').onclick = () => {

//   __('tenis').value =  "0";
//   __('tamarindo').value = "0";
//   __('horchata').value = "0";

//   delete __('cart_jamaica').innerHTML

//     respuesta = "Su carrito ha sido vaciado";
//   __('vaciar').innerHTML = respuesta;

// }


//Para calcular el costo total de las aguas
__('total_car').onclick = () => {

    __('tenis').value = Number(__('tenis').value);
    __('botas').value = Number(__('botas').value);
    __('vestir').value = Number(__('vestir').value);

    var precio_jam = 0
    var precio_hor = 0
    var precio_tam = 0

    if (__('tenis').value > 0){
        precio_jam = 15 * __('tenis').value
    }

    if (__('vestir').value > 0){
        precio_hor = 600 * __('vestir').value
    }

    if (__('botas').value > 0){
        precio_tam = 700 * __('botas').value
    }

    var precio = precio_jam + precio_hor + precio_tam;
    var iva = precio * 0.16
    var final = precio + iva

    let respuesta = "";

    respuesta += "<table><tr><th>Total: </th><td>$" + precio +"</td></tr><tr><th>Iva: </th><td>$" + iva +"</td></tr><tr><th><b>FINAL:</b></th><td><b>$" + final +"</b><table>";
    
    __('pago').innerHTML = respuesta;
    
}