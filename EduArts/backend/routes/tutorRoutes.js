const express = require('express');
const router = express.Router();
const tutorController = require('../controllers/tutorController');

router.post('/create', tutorController.createTutorProfile);
router.get('/list', tutorController.listTutors);

module.exports = router;
