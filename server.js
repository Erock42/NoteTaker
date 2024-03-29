const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname,'../db/db.json'));
});

app.post("/api/notes",(req, res) => {
function writeNote(body) {
  const newNote = body;
    fs.writeFileSync(__dirname, '../db/db.json'),
    JSON.stringify({ newNote }, null)
  return newNote;
}});



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });