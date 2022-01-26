const express = require('express');

const ContactController = require('./app/controllers/ContactController');

const routes = express.Router();

routes.get('/contacts', ContactController.index);
routes.get('/contacts/:id', ContactController.show);
routes.post('/contacts', ContactController.store);
routes.put('/contacts/:id', ContactController.update);
routes.delete('/contacts/:id', ContactController.delete);

module.exports = routes;
