const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../Models/User');
require('dotenv').config();

// Mail sending module
const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Register
router.post('/register', async (req, res) => {
  const { name, su_email, su_password } = req.body;

  // Check if username is provided
  if (!name) {
    return res.status(400).json({ message: 'Username is required' });
  }

  try {
    console.log('Registering user:', req.body);

    let user = await User.findOne({ email: su_email });
    if (user) {
      console.log('Email already registered:', su_email);
      return res.status(400).json({ message: 'Email already registered' });
    }

    user = await User.findOne({ username: name });
    if (user) {
      console.log('Username already exists:', name);
      return res.status(400).json({ message: 'Username already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(su_password, salt);

    user = new User({
      username: name,
      email: su_email,
      password: hashedPassword,
      avatar: 'https://via.placeholder.com/150',
    });

    await user.save();

    const mailOptions = {
      from: "CapitalCompass",
      to: su_email,
      subject: 'Welcome to Our Website!',
      html: `<p>Hello ${name},</p><p>Thank you for signing up on our website.</p><p>humari website boht khatarnak he</p><p>Best Regards,</p><p>CapitalCompass</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending confirmation email');
      } else {
        console.log('Email sent:', info.response);
        return res.status(200).send('Signup successful and email sent');
      }
    });

    console.log('User registered successfully:', user);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    console.log('Logging in user:', req.body);

    const user = await User.findOne({ username });
    if (!user) {
      console.log('Invalid credentials - User not found:', username);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid credentials - Password mismatch:', username);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const payload = {
      userId: user._id,  // Ensure this matches what authMiddleware expects
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) {
          console.error('Error signing token:', err);
          throw err;
        }
        res.json({ token: token });
        console.log(token);
        console.log('User logged in successfully:', user);
      }
    );
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
