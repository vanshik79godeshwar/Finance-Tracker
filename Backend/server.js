// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const connectDB = require('./config/database');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');
const authMiddleware = require('./MiddleWare/authMiddleware');
const ChatMessage = require('./Models/Chatmsg'); // Import your ChatMessage model

// To load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.io with the server and enable CORS
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173', // Replace with your frontend's URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  },
});

// Connect Database
connectDB();

app.use(express.json({ extended: false }));
// Init Middleware
app.use(bodyParser.json());

// Enable CORS for API routes
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-auth-token', 'Authorization'],
}));

// Define Routes
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/protected', require('./Routes/protected'));
app.use('/api/user', require('./Routes/UserRoutes'));
app.use('/api/transactions', authMiddleware, require('./Routes/transactions'));
app.use('/api/get-user', require('./Routes/getUser'));
app.use('/api/etf', require('./Routes/etf'));
app.use('/api/user1', require('./Routes/userProfile'));

// Route to fetch initial messages for a group
app.get('/api/chat/:group', async (req, res) => {
  const group = req.params.group;
  try {
    const messages = await ChatMessage.find({ group });
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
});

// Route to fetch news
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

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinGroup', async (group) => {
    socket.join(group);
    console.log(`User joined group: ${group}`);

    // Fetch initial messages for the group
    try {
      const messages = await ChatMessage.find({ group });
      socket.emit('initialMessages', messages);
    } catch (err) {
      console.error(err);
    }
  });

  socket.on('sendMessage', async (message1) => {
    const { group, sender, message, avatar } = message1;
    try {
      // Save message to the database
      const newMessage = new ChatMessage({ group, sender, message, avatar });
      await newMessage.save();

      // Emit message to the group
      io.to(group).emit('receiveMessage', { sender, message, avatar });
    } catch (err) {
      console.error(err);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
