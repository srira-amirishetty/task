const express = require('express');
const Attendance = require('../models/Attendance'); 
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const onTime = await Attendance.countDocuments({ status: 'On-time' });
    const late = await Attendance.countDocuments({ status: 'Late' });
    const dayOff = await Attendance.countDocuments({ status: 'Day-off' });
    const notPresent = await Attendance.countDocuments({ status: 'Not-present' });

    res.json({
      onTime,
      late,
      dayOff,
      notPresent,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendance data' });
  }
});

module.exports = router; 
