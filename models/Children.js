const mongoose = require('mongoose');

const ChildrenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  enrollmentDate: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('Children', ChildrenSchema);
