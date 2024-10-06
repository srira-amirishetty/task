const express = require('express'); 
const Financials = require('../models/Financials'); 

router.get('/', async (req, res) => {
  try {
    const totalRevenue = await Financials.getTotalRevenue(); 
    const totalExpenses = await Financials.getTotalExpenses(); 
    const profitMargin = totalRevenue - totalExpenses;

    res.json({
      totalRevenue,
      totalExpenses,
      profitMargin,
    });
  } catch (error) {
    console.error("Error fetching financial data:", error.message); 
    res.status(500).json({ message: 'Error fetching financial data' });
  }
});

module.exports = router;

