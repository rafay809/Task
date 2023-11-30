const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: String,
  image: String,
  workerId: String,
  mobileNumber: String,
  joiningDate: Date,
  hasCarRent: Boolean,
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  workId: { type: mongoose.Schema.Types.ObjectId, ref: 'Work' },
  isDeleted: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model('Worker', workerSchema);
