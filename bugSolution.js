const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch the user
  // Add error handling for invalid or missing user IDs
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(404).send('Invalid or missing User ID');
  }
  // ... some database query to fetch the user
  db.query('SELECT * FROM users WHERE id = $1', [userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    const user = result.rows[0];
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  });
});

// ... other routes

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});