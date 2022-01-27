const express = require('express');

const routes = express.Router();

routes.get('/contacts', () => {});
routes.get('/contacts/:id', () => {});
routes.delete('/contacts/:id', () => {});

routes.post('/contacts', () => {});
routes.put('/contacts/:id', () => {});

module.exports = routes;
