
// Dependencies
const path = require('path');

// Routing
module.exports = (app) => {

  // Define routes
  // Route to serve the notes.html file when accessed via GET /notes
  app.get('/notes', (req, res) => {
    // Send the notes.html file as response
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // Route to serve the index.html file for all other GET requests
  app.get('*', (req, res) => {
    // Send the index.html file as response
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}; 
