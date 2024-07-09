// Create web server 
// Create a file called comments.js that contains an array of comments. Each comment should be an object with the following properties: username, comment, and timestamp.
// Create a web server that sends the contents of the comments array as a JSON response. The server should listen on port 3000.

const express = require('express');
const app = express();
const comments = require('./comments');

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});