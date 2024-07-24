// routes/getUser.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../MiddleWare/authMiddleware'); // Adjust the path if needed
const User = require('../Models/User'); // Adjust the path if needed
const cors = require('cors');

router.use(cors());

// Route to get the user based on JWT
router.get('/get-user', authMiddleware, async (req, res) => {
  console.log(req.user,"request to ki he");
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
