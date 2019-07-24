// Module imports
const express = require('express');
const conncectDB = require('./config/db.js');
const cors = require('cors');
// Route Imports
const userRoutes = require('./routes/api/users.js');
const authRoutes = require('./routes/api/auth.js');
const profileRoutes = require('./routes/api/profile.js');
const reservationRoutes = require('./routes/api/reservation.js');

// This initializes the express server
const app = express();

// Middleware Initialization
    // handles request body parsing
    app.use(express.json({ extended: false }));
    app.use(cors());

// Connects to the database
conncectDB();

// Creates a variable called "PORT" and binds it to either 
// the production environment or local
const PORT = process.env.PORT || 5000;

// This tells the express server to listen to a given port and executes a callback on connection
app.listen(PORT, () => console.log(`server started on port: ${PORT}`));


// This tells the app which ROUTES to use
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/reservations', reservationRoutes); 
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/profile', profileRoutes);