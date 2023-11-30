const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  name: String,
  image: String,
  type: String,
  startDate: Date,
  companyName: String,
  companyAddress: String,
  mobileNumber: String,
  companyWebsite: String,
  paymentType: { type: String, enum: ['BOX', 'HOUR'] },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isDeleted: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model('Work', workSchema);
