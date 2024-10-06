const mongoose = require('mongoose');

const FinancialSchema = new mongoose.Schema({
  totalRevenue: { type: Number, required: true, default: 0 },
  totalExpenses: { type: Number, required: true, default: 0 },
  date: { type: Date, default: Date.now },
});


FinancialSchema.statics.getTotalRevenue = async function() {
  const result = await this.aggregate([
    { $group: { _id: null, total: { $sum: '$totalRevenue' } } }
  ]);
  return result[0] ? result[0].total : 0; 
};

// Static method to get total expenses
FinancialSchema.statics.getTotalExpenses = async function() {
  const result = await this.aggregate([
    { $group: { _id: null, total: { $sum: '$totalExpenses' } } }
  ]);
  return result[0] ? result[0].total : 0; 
};

module.exports = mongoose.model('Financials', FinancialSchema);
