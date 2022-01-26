const express = require('express');

const ContactController = require('./app/controllers/ContactController');

const routes = express.Router();

routes.get('/contacts', ContactController.index);

module.exports = routes;
