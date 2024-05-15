const express = require('express');
const conectarBD = require('../config/db');

//Dependencia protocolos dependencia: cors 
const cors = require('cors');

// configuracion express y puerto
const app = express();
const port = process.env.port || 5000;

//Conectar el proyecto, modulo apiclientes requiere ruta probar el modulo
app.use(express.json());

// ruta para el modulo apiclientes mongodb
app.use('/api/clientes', require('../routes/RoutesCliente'));

//Enlazar la conexion a la Base de Datos
conectarBD();
app.use(cors());

//se configura el puerto que va a tener nuestro servidor
app.listen(port, () => console.log('El Servidor Conectado: http://localhost:5000'));

//Probar esta ruta en el navegador
app.get('/', (req, res) => {
    
    res.send('Bienvenido Nuestro Servidor esta Configurado');
});
