const express = require('express');
const router = express.Router();
const { getReservation, createReservation, deleteReservation } = require('../controllers/reservationControllers');
const { authToken, isAdmin } = require('../middleware/authMiddleware');

router.get('/get/reservation', authToken, isAdmin, getReservation);
router.post('/create/reservation', createReservation);
router.delete('/delete/reservation/:id', authToken, isAdmin, deleteReservation);

module.exports = router;

