

// instanciar express
const express = require('express');
const router = express.Router();

// instanciar controller para cada uno de los metodos 
const ClienteController = require('../controllers/ClienteController');

// aca van las rutal del crud
router.post('/', ClienteController.agregarClientes);



// ejercicio adicional 
router.get('/', ClienteController.mostrarClientes);
router.get('/:id', ClienteController.mostrarUnCliente);
router.delete('/:id', ClienteController.eliminarClientes);
router.patch('/:id', ClienteController.modificarCliente);


// exporta el modulo, router configurado 

module.exports = router;
