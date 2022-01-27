const express = require('express');

const ContactController = require('./controllers/ContactController');

const routes = express.Router();

routes.get('/contacts', ContactController.index);
routes.get('/contacts/:id', ContactController.show);
routes.delete('/contacts/:id', ContactController.delete);

routes.post('/contacts', ContactController.store);
routes.put('/contacts/:id', ContactController.update);

module.exports = routes;
