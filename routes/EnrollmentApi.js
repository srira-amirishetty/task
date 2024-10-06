const express = require('express');
const Enrollment = require('../models/Enrollment');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const enrollments = await Enrollment.find(); 
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enrollment data' });
  }
});

module.exports = router; 
