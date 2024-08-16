const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uploadRoute = require('./routes/upload');
const studentsRoute = require('./routes/students');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', uploadRoute);
app.use('/api', studentsRoute);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
