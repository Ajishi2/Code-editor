const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (app.js, app.css) from the 'src' directory
app.use(express.static(path.join(__dirname)));

// Serve the iframe content
app.get('/iframe-content.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'iframe-content.html'));
});

// Serve the parent page (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
