const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// For any route, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Run server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
