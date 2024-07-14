const express = require('express');
const router = express.Router();
const auth = require('../MiddleWare/authMiddleware');

router.get('/', auth, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

module.exports = router;
