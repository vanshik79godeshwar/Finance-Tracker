const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    resume: String,
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;

