const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  paymentType: { type: String, enum: ['BOX', 'HOUR'], required: true },
  hasCarRent: { type: Boolean, default: false },
  workId: { type: Schema.Types.ObjectId, ref: 'Work' },
  isDeleted: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
