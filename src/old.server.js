const express = require('express');

const app = express();

// Methods: GET, POST, PUT, DELETE

//Pega query na url (req.query) para filtros
app.get('/', (req, res) => {
    // return res.send('Hello World!');
    return res.json({
        message: "Hello OmniStack!",
        user: req.query.user
    });
});

// Pega parametro na url (req.params) para editar, deletar
app.put('/user/:id', (req, res) => {
    return res.json({
        user: req.params.id
    });
});

// Para o express entender json
app.use(express.json());

// Pega parametro na url (req.body) para criar e editar
app.post('/user', (req, res) => {
    return res.json(req.body);
});


app.listen(3333);