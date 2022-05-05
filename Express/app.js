const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware');
    next(); // le permitea a la peticion avnzar hacia el siguiente middleware
});

app.use((request, response, next)=> {
    console.log('Otro middleware');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);