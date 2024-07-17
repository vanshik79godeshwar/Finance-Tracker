const express = require('express');
const router = express.Router();
const authMiddleware = require('../MiddleWare/authMiddleware');
const User = require('../Models/User'); // Replace with your User model


// @route   GET /api/user
// @desc    Get user profile
// @access  Private
router.get('/:username', async (req, res) => {
  try {
    // Fetch user data excluding sensitive information
    console.log(`Received request for user: ${req.params.username}`);
    const { username } = req.params;
    const user = await User.findOne({ username: username }).select('-password');

    console.log('user data : ',user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User data fetched successfully');
    console.log('User data:', user);
    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
