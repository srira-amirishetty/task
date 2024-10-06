const express = require('express');
const Caregiver = require('../models/Caregiver'); 
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const active = await Caregiver.countDocuments({ status: 'Active' });
    const inactive = await Caregiver.countDocuments({ status: 'Inactive' });
    const total = active + inactive;

    res.json({
      total,
      active,
      inactive,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching caregiver data' });
  }
});

module.exports = router;
