const Tutor = require('../models/Tutor');
const User = require('../models/User');

exports.createTutorProfile = async (req, res) => {
  try {
    const { userId, bio, subjects, category, hourlyRate } = req.body;
    const tutor = await Tutor.create({ user: userId, bio, subjects, category, hourlyRate });
    res.json({ message: 'Tutor profile created', tutor });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.listTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find().populate('user', 'name email');
    res.json(tutors);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
