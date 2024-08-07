const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact');

router.post('/', async (req, res) => {
  const { name, email, phone, subject, comments } = req.body;
  const newContact = new Contact({ name, email, phone, subject, comments });
  
  try {
    await newContact.save();
    res.status(201).json({ message: 'Contact message submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit contact message', error });
  }
});

module.exports = router;
