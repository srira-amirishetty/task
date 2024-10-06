const express = require('express');
const Children = require('../models/Children'); 
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const active = await Children.countDocuments({ status: 'Active' });
    const inactive = await Children.countDocuments({ status: 'Inactive' });
    const total = active + inactive;

    res.json({
      total,
      active,
      inactive,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching children data' });
  }
});

module.exports = router;
