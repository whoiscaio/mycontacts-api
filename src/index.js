const express = require('express');

const server = express();

server.get('/', (request, response) => {
  response.send('Hello world');
});

server.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
})