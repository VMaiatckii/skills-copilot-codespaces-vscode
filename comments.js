// create web server
const express = require('express');
const app = express();

// create a route that listens for POST requests to /comments
app.post('/comments', (req, res) => {
  res.send('You sent a POST request');
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});