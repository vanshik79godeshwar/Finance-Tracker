const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
  linkedinId: {
    type: String,
  },
  instagramId: {
    type: String,
  },
  xId: {
    type: String,
  },
  socialMediaIds: {
    type: Map,
    of: String,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  bio: {
    type: String,
  },
  companyOrCollege: {
    type: String,
  },
  birthDate: {
    type: Date,
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) || mongoose.models.User;
