const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


UserSchema.methods.comparePassword = function (password) {
  return this.password === password;
};

module.exports = mongoose.model('User', UserSchema);
