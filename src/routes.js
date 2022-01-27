const express = require('express');

const ContactController = require('./controllers/ContactController');

const routes = express.Router();

routes.get('/contacts', ContactController.index);
routes.get('/contacts/:id', () => {});
routes.delete('/contacts/:id', () => {});

routes.post('/contacts', () => {});
routes.put('/contacts/:id', () => {});

module.exports = routes;
