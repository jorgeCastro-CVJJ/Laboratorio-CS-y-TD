const express = require('express');

const router = express.Router();

router.get('/',(request, response, next) =>{
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Mexico</title><meta charset="utf-8"></meta></head><body><h1>Estados de México</h1><main><h2>Existen Estados</h2><p>Tenemos 32 entidades federativas. Queretaro, CDMX, y EdoMex son algunas de ellas.</p></body></html>';
    response.send(respuesta);
});

router.get('/Queretaro',(request, response, next) =>{
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Mexico</title><meta charset="utf-8"></meta></head><body><h1>Queretaro</h1><main><h2>Existe lugares de Qro</h2><p>La cervecería Hercules</p></body></html>';
    response.send(respuesta);
});
router.get('/CDMX',(request, response, next) =>{
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Mexico</title><meta charset="utf-8"></meta></head><body><h1>CDMX</h1><main><h2>Existen lugares en CDMX</h2><p>Polanco, el Museo Soumaya, INAH, Chaputepec o Bellas Artes.</p></body></html>';
    response.send(respuesta);
});
router.get('/EdoMex',(request, response, next) =>{
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>México</title><meta charset="utf-8"></meta></head><body><h1>EdoMex</h1><main><h2>Existen lugares en EdoMéx</h2><p>Texcoco, Papalotpla, El Oro, Acambay o Toluca.</p></body></html>';
    response.send(respuesta);
});

module.exports = router;