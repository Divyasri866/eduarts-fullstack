const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/book', studentController.createBooking);
router.get('/bookings', studentController.listBookings);

module.exports = router;
