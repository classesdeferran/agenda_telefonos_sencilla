// Cargar los módulos
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Importado las rutas
const rutas = require('./rutas')

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('public'))
app.use(rutas)


app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
