const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

// Connect to database
connectDB();

// ⚠️ IMPORTANT: Middleware MUST come BEFORE routes
app.use(cors());
app.use(express.json()); // This parses JSON bodies
app.use(express.urlencoded({ extended: true })); // This parses URL-encoded bodies

// Routes (after middleware)
app.use('/api/auth', authRoutes);
app.use('/api/feedbacks', feedbackRoutes);
// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Feedback Board API is running' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
