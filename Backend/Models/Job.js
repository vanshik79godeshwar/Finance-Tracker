const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  department: { type: String, required: true },
 });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;