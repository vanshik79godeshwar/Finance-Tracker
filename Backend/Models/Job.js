const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    // Add other fields as necessary
}, { collection: 'jobOpenings' }); // Ensure this matches your collection name

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
