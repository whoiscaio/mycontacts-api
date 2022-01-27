const express = require('express');

const ContactController = require('./controllers/ContactController');

const routes = express.Router();

routes.get('/contacts', ContactController.index);
routes.get('/contacts/:id', ContactController.show);
routes.delete('/contacts/:id', ContactController.delete);

routes.post('/contacts', () => {});
routes.put('/contacts/:id', () => {});

module.exports = routes;
