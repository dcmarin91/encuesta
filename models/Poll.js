const mongoose = require('mongoose');

const pollSchema = mongoose.Schema({
  title: String,
  description: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Poll = mongoose.model('Poll', pollSchema);  

module.exports = Poll;