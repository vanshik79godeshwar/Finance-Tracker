const express = require('express');
const router = express.Router();
const Appointment = require('../Models/Appointment');

// @route   POST api/appointments
// @desc    Book an appointment
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, date, time, message, flexibility } = req.body;

  try {
    const newAppointment = new Appointment({
      name,
      email,
      date,
      time,
      message,
      flexibility,
    });

    const appointment = await newAppointment.save();
    res.json(appointment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
