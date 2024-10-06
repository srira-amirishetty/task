const mongoose = require('mongoose');

const CaregiverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' }
});

module.exports = mongoose.model('Caregiver', CaregiverSchema);
