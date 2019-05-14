require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario/:id', function(req, res) {
    let id = req.params.id; //Obtengo el ID que le llega por parametro.
    res.json({
        id
    });
})

app.post('/usuario', function(req, res) {

    let body = req.body; //Esto va a aparecer cuando el bodyparcer procese cualquier cosa que reciba las peticiones.
    //el req.body son va a servir para POST - PUT - DELETE

    if (body.nombre === undefined) {
        res.status(400).json({ //enviamos el codigo 400 indicando un error.
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }
})

app.put('/usuario', function(req, res) {
    res.json('put usuario')
})

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: ', process.env.PORT);
})