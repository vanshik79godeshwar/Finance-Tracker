// const express = require('express');
// const config = require('config');
// const mongoose = require('mongoose');
// const axios = require('axios');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const http = require('http');
// const socketIo = require('socket.io');
// const authMiddleware = require('./MiddleWare/authMiddleware');
// const ChatMessage = require('./Models/Chatmsg'); // Import your ChatMessage model
// const Job = require('./Models/Job'); // Import the Job model

// // Load environment variables
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Create HTTP server
// const server = http.createServer(app);

// // Initialize Socket.io with the server and enable CORS
// const io = socketIo(server, {
//   cors: {
//     origin: 'http://localhost:5173', // Replace with your frontend's URL
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
//   },
// });

// // Connect to MongoDB
// mongoose.connect(config.get('MONGO_URI'), { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Middleware
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(cors({
//   origin: 'http://localhost:5173', // Replace with your frontend's URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'x-auth-token', 'Authorization'],
// }));

// // Define Routes
// app.use('/api/auth', require('./Routes/auth'));
// app.use('/api/protected', require('./Routes/protected'));
// app.use('/api/user', require('./Routes/UserRoutes'));
// app.use('/api/transactions', authMiddleware, require('./Routes/transactions'));
// app.use('/api/get-user', require('./Routes/getUser'));
// app.use('/api/etf', require('./Routes/etf'));
// app.use('/api/user1', require('./Routes/userProfile'));
// app.use('/api/career', require('./Routes/careerRoutes')); // Include career routes

// // Route to fetch initial messages for a group
// app.get('/api/chat/:group', async (req, res) => {
//   const group = req.params.group;
//   try {
//     const messages = await ChatMessage.find({ group });
//     res.json(messages);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to retrieve messages' });
//   }
// });

// // Route to fetch news
// app.get('/api/news', async (req, res) => {
//   const query = req.query.query || 'Finance';
//   const apiKey = process.env.NEWS_API_KEY;

//   if (!apiKey) {
//     return res.status(500).json({ error: 'API key is missing' });
//   }

//   try {
//     const response = await axios.get(`http://newsapi.org/v2/everything?q=${query}`, {
//       headers: { 'Authorization': `Bearer ${apiKey}` }
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching news:', error.message);
//     if (error.response) {
//       console.error('Response data:', error.response.data);
//     }
//     res.status(500).json({ error: 'Failed to fetch data' });
//   }
// });

// // Route to fetch jobs
// app.get('/api/jobs', async (req, res) => {
//   const { keyword, department } = req.query;
//   const query = {};

//   if (keyword) {
//     query.jobTitle = { $regex: keyword, $options: 'i' }; // Case-insensitive keyword search
//   }

//   if (department) {
//     query.department = department;
//   }

//   try {
//     const jobs = await Job.find(query);
//     res.json(jobs);
//   } catch (err) {
//     console.error('Error fetching jobs:', err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Route to submit a job application
// app.post('/api/apply', async (req, res) => {
//   const applicationData = req.body;
//   try {
//     const Application = mongoose.model('Application', new mongoose.Schema({
//       // Define fields for application
//       name: String,
//       email: String,
//       resume: String,
//       // Add other fields as necessary
//     }));
//     const newApplication = new Application(applicationData);
//     await newApplication.save();
//     res.status(201).send('Application submitted successfully');
//   } catch (err) {
//     console.error('Error submitting application:', err);
//     res.status(500).json({ error: 'Failed to submit application' });
//   }
// });

// app.get('/', (req, res) => {
//   res.send('Hello World from backend');
// });

// io.on('connection', (socket) => {
//   console.log('New client connected');

//   socket.on('joinGroup', async (group) => {
//     socket.join(group);
//     console.log(`User joined group: ${group}`);

//     // Fetch initial messages for the group
//     try {
//       const messages = await ChatMessage.find({ group });
//       socket.emit('initialMessages', messages);
//     } catch (err) {
//       console.error(err);
//     }
//   });

//   socket.on('sendMessage', async (message1) => {
//     const { group, sender, message, avatar } = message1;
//     try {
//       // Save message to the database
//       const newMessage = new ChatMessage({ group, sender, message, avatar });
//       await newMessage.save();

//       // Emit message to the group
//       io.to(group).emit('receiveMessage', { sender, message, avatar });
//     } catch (err) {
//       console.error(err);
//     }
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

// // Start the server
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');
const authMiddleware = require('./MiddleWare/authMiddleware');
const ChatMessage = require('./Models/Chatmsg'); // Import your ChatMessage model
const Job = require('./Models/Job'); // Import the Job model
const Application = require('./Models/Application'); // Import the Application model

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.io with the server and enable CORS

// https://finance-tracker-dun.vercel.app
// http://localhost:5173

const io = socketIo(server, {
  cors: {
    origin: 'https://finance-tracker-dun.vercel.app', // Replace with your frontend's URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  },
});

// Connect to MongoDB
const url = process.env.MONGO_URI || config.get('MONGO_URI');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://finance-tracker-dun.vercel.app', // Replace with your frontend's URL
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
app.use('/api/career', require('./Routes/careerRoutes')); // Updated path to career routes
app.use('/api/appointments', require('./Routes/appointment')); // Include appointment routes
app.use('/api/contact' , require('./Routes/contact'));

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
    const response = await axios.get(`http://newsapi.org/v2/everything?q=${query}`, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Route to fetch jobs
app.get('/api/jobs', async (req, res) => {
  const { keyword, department } = req.query;
  const query = {};

  if (keyword) {
    query.jobTitle = { $regex: keyword, $options: 'i' }; // Case-insensitive keyword search
  }

  if (department) {
    query.department = department;
  }

  try {
    const jobs = await Job.find(query);
    console.log('Jobs from Database:', jobs); // Add this line
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to submit a job application
app.post('/api/apply', async (req, res) => {
  const applicationData = req.body;
  console.log('Application Data: ', applicationData);
  try {
    console.log('hello data!');
    const newApplication = new Application(applicationData);
    await newApplication.save();
    res.status(201).send('Application submitted successfully');
  } catch (err) {
    console.error('Error submitting application:', err);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World from backend');
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
