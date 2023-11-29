const express = require('express');
const {createClient, Login, updateClient, deleteClient} = require('../Controllers/ClientController');
const routes = express.Router();

routes.post('/signup',createClient)
routes.post('/login', Login)
routes.put('/update', updateClient)
routes.delete('/:id', deleteClient)







module.exports = routes;