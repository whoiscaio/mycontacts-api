const express = require('express');
const CategoryController = require('./app/controllers/CategoryController');

const ContactController = require('./app/controllers/ContactController');

const routes = express.Router();

routes.get('/contacts', ContactController.index);
routes.get('/contacts/:id', ContactController.show);
routes.delete('/contacts/:id', ContactController.delete);
routes.post('/contacts', ContactController.store);
routes.put('/contacts/:id', ContactController.update);

routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.show);
routes.delete('/categories/:id', CategoryController.delete);
routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);

module.exports = routes;
