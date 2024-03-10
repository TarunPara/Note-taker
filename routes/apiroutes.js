// Dependencies
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid'); // Package for generating unique IDs

// Routing
module.exports = (app) => {

  // GET route to fetch all saved notes as JSON
  app.get('/api/notes', (req, res) => {
    // Read the db.json file and send its content as response
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  // POST route to add a new note
  app.post('/api/notes', (req, res) => {
    // Read the current notes from db.json
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    
    // Create a new note object with title, text, and a unique ID
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(), // Generate a unique ID
    };
    
    // Push the new note to the existing notes array
    db.push(newNote);
    
    // Write the updated notes back to db.json
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    
    // Send the new note as response
    res.json(newNote);
  });

  // DELETE route to remove a note by ID
  app.delete('/api/notes/:id', (req, res) => {
    // Read the current notes from db.json
    let db = JSON.parse(fs.readFileSync('db/db.json'));
    
    // Filter out the note with the specified ID
    let remainingNotes = db.filter(item => item.id !== req.params.id);
    
    // Rewrite the db.json file with the remaining notes
    fs.writeFileSync('db/db.json', JSON.stringify(remainingNotes));
    
    // Send the remaining notes as response
    res.json(remainingNotes);
  });
};
