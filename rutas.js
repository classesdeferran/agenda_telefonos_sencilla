// Cargar Express
const express = require('express');
// Cargar configurador de rutas
const rutas = express.Router();

rutas.get('/', (req, res) => {
    console.log("Estoy funcionando");
    res.send('Estoy en rutas.js');
});

module.exports = rutas;