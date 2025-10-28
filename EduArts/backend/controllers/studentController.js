const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { student, tutor, subject, scheduledAt, amount } = req.body;
    const booking = await Booking.create({ student, tutor, subject, scheduledAt, amount });
    res.json({ message: 'Booking created', booking });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.listBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('student tutor');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
