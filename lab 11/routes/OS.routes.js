const express = require('express');

const router = express.Router();
const OS = ["MacOS", "Windows", "Android"];
const filesystem = require('fs');

router.get('/',(request, response, next) =>{
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Sistemas Operativos</title><meta charset="utf-8"></meta></head><body><h1>Sistemas Opertavos</h1><main><h2>Existen OS:</h2><p>Estos son los OS que conocemos:</p><ol>';
    for (let i in OS){
        respuesta += '<li>' + OS[i] + '</li>';
    }
    respuesta += '</ol><a href="/OS/nuevo">Agregar un nuevo Sistema Operativo</a></main></body></html>'
    response.send(respuesta);
});

router.get('/nuevo',(request, response, next) =>{
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Sistemas Operativos</title><meta charset="utf-8"></meta></head><body><h1>Bienvenido a este sitio de Sistemas Operativos</h1><main><h2>Aquí se habla se de nuevos OSes</h2><p>Ingresa los datos del nuevo OS:</p><form action="/OS/nuevo" method="POST"><label for="nombre">Nombre del nuevo OS: </label><input type="text" name="nombre" required><input type="submit" value="Enviar"></form><br><br><a href="/OS">Regresar a la lista de Sistemas</a></br></body></html>';
    response.send(respuesta);
});

router.post('/nuevo',(request,response,next) =>{
    //console.log(request.body);
    OS.push(request.body.nombre);
    console.log(OS);
    filesystem.writeFileSync('OS.txt', request.body.nombre)
    response.status(303);
    response.redirect('/OS/');
});

module.exports = router;