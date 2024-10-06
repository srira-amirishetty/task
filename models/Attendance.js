const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['On-time', 'Late', 'Day-off', 'Not-present'],
    required: true
  },
  date: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
