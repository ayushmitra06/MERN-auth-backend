require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db.js');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

//database connection
connection();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the server');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});