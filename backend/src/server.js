const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
require('dotenv').config();

// Import routes
const countryRoutes = require('./routes/countries');
const categoryRoutes = require('./routes/categories');
const hashtagRoutes = require('./routes/hashtags');
const trendingRoutes = require('./routes/trending');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(compression()); // Compress responses
app.use(morgan('dev')); // Logging
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Welcome route
app.get('/', (req, res) => {
  res.json({
    message: 'Arabic Hashtag Generator API',
    version: '1.0.0',
    endpoints: {
      countries: '/api/countries',
      categories: '/api/categories',
      hashtags: '/api/hashtags',
      trending: '/api/trending'
    }
  });
});

// API Routes
app.use('/api/countries', countryRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/hashtags', hashtagRoutes);
app.use('/api/trending', trendingRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
});

module.exports = app;