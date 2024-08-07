// routes/getUser.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../MiddleWare/authMiddleware'); // Adjust the path if needed
const User = require('../Models/User'); // Adjust the path if needed
const cors = require('cors');

router.use(cors());

// Route to get a specific user by username based on JWT
router.get('/get-user/:username', authMiddleware, async (req, res) => {
  console.log("hi");
  try {
    console.log("hello");
    const user = await User.findOne({ username: req.params.username }).select('-password');
    console.log(user)
    // Exclude password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;