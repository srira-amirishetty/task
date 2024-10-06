const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  childName: { type: String, required: true },
  enrollmentDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Enrolled', 'Pending', 'Withdrawn'], default: 'Enrolled' }
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
