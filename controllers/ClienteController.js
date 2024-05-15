//enlazar modelo con el controller 
//exportar el modelo 
const Cliente = require('../models/Cliente');

// crear un funcion agregar cliente
exports.agregarClientes = async (req, res) => {

    try {
        let clientes = new Cliente(req.body)
        await clientes.save();
        res.send(clientes);
    } catch (error) {
        console.log(err)
        res.status(500).send('Hubo un error al agregar un Cliente')
    }
}
// segunda parte del ejercicio 

//Mostrar clientes
exports.mostrarClientes = async (req, res) => {
    try {
        let clientes = await Cliente.find()
        res.json(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un cliente')
    }
}

// Mostrar un cliente

exports.mostrarUnCliente = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);

        if (!clientes) {
            res.status(404).json({ msg: 'No se encuentra el cliente con ese ID' });
        }
        res.send(clientes)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un cliente');
    }
}

// Funcion para eliminar clientes
exports.eliminarClientes = async (req, res) => {
    try {

        let clientes = await Cliente.findById(req.params.id);
        if (!clientes) {
            res.status(404).json({ msg: "El cliente no existe" });
            return
        }

        await Cliente.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "El cliente fue eliminado" });

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar un cliente en la BD');
    }
}






//modificar cliente
exports.modificarCliente = async (req, res) => {
    try {
        let cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cliente) {
            return res.status(404).send('Cliente no encontrado');
        }
        res.json(cliente)
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar un cliente en la BD');

    }
}

