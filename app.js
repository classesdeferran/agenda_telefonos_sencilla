// Cargar los módulos
const express = require('express');
const app = express();

// Importado las rutas
const rutas = require('./rutas')

const PORT = 3000

app.use(rutas)


app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
