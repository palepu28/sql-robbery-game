const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Use Render's port or 3000 locally
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
