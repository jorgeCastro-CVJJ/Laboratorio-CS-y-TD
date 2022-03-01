const http = require('http');

const server = http.createServer((request,response) => {

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/hmtl');
        response.write(`<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title><meta charset="utf-8"></meta></head>`);
        response.write(`<body>`);
        response.write('<h1>Bienvenido a este sitio de caballos</h1>');
        response.write(`<main>`);
        response.write('<p>Aquí se habla de caballos</p>');
        response.write(`</main>`);
        response.write(`</body>`);
        response.write(`</hmtl>`);
        response.end();
    }
});

server.listen(3000);