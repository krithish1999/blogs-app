// app.js
const express = require('express');
const app = express();
const db = require('./db'); // Import the MongoDB connection
const methodOverride = require('method-override'); // Import method-override


// Configure EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Add method-override middleware


// Define routes for creating, viewing, and deleting blogs
app.use('/blogs', require('./routes/blogRoutes'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
