const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  bio: String,
  subjects: [String],
  category: String,
  hourlyRate: Number,
  rating: { type: Number, default: 0 },
  demoVideoUrl: String,
  availableSlots: [{ date: Date, slot: String }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tutor', tutorSchema);
