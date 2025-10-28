const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  tutor: { type: Schema.Types.ObjectId, ref: 'Tutor', required: true },
  subject: String,
  scheduledAt: Date,
  status: { type: String, enum: ['pending','confirmed','completed','cancelled'], default: 'pending' },
  amount: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
