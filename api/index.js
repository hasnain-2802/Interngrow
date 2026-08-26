require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../config/swagger');
const authRoutes = require('../routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('InternGrow Auth API is running');
});

let cachedConnection = null;

const connectDB = async () => {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  cachedConnection = await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
    bufferCommands: false,
  });

  return cachedConnection;
};

module.exports = async (req, res) => {
  try {
    await connectDB();
  } catch (error) {
    console.error('DB connection failed:', error.message);
    return res.status(500).json({ message: 'Database connection failed' });
  }
  return app(req, res);
};