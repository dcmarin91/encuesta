const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: String,
  name: String,
  poll: [{ type: mongoose.Schema.Types.ObjectId, ref: "Poll" }]
});

const User = mongoose.model('User', userSchema);  

module.exports = User;