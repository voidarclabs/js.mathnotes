const express = require('express');
const app = express();
const path = require('path');

var port = 4000

// Serve the index.html file when the root path is requested
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public'));
});

// Serve static files from the public directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});