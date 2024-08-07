const express = require('express');
const router = express.Router();
const Job = require('../Models/Job');
const Application = require('../Models/Application');

// Get all jobs
router.get('/jobs', async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error });
    }
});

// Apply for a job
router.post('/apply', async (req, res) => {
    try {
        const { name, email, resume, jobId } = req.body;
        const application = new Application({ name, email, resume, jobId });
        await application.save();
        res.status(200).json({ message: 'Application submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting application', error });
    }
});

module.exports = router;

