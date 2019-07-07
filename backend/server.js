// Module imports
const express = require('express');

// This initialized the express server
const app = express();

// Creates a variable called "PORT" and binds it to either 
// the production environment or local
const PORT = process.env.PORT || 5000;

//Tells the express server to listen to a given port and executes a callback on connection
app.listen(PORT, () => console.log(`server started on port: ${PORT}`));

app.get('/', (req, res) => {
    res.send("API up and running")
})