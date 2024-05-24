// Cargar Express
const express = require("express");
// Cargar configurador de rutas
const rutas = express.Router();

rutas.get("/", (req, res) => {
  res.render("index", { title: "Mi Agenda" });
});

module.exports = rutas;
