
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const connectDB = require('./config/database');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authMiddleware = require('./MiddleWare/authMiddleware');

// To load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

app.use(express.json({ extended: false }));
// Init Middleware
app.use(bodyParser.json());

// Enable CORSs
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-auth-token','Authorization'],
}));

// Define Routes
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/protected', require('./Routes/protected'));
app.use('/api/user', require('./Routes/UserRoutes'));
app.use('/api/transactions', authMiddleware,require('./Routes/transactions'));
app.use('/api/get-user', require('./Routes/getUser'));
app.use('/api/etf', require('./Routes/etf'));
app.use('/api/user1', require('./Routes/userProfile'));

app.get('/api/news', async (req, res) => {
  const query = req.query.query || 'Finance'; 

  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=finance + ${query}`, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error.message); // Log error message
    if (error.response) {
      console.error('Response data:', error.response.data); // Log response data
    }
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
