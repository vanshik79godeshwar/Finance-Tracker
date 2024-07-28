// models/ChatMessage.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatMessageSchema = new Schema({
  group: { type: String, required: true },
  sender: { type: String, required: true },
  message: { type: String, required: true },
  avatar: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);
