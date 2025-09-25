const express = require('express');
const router = express.Router();
const { getContact, createContact, deleteContact } = require('../controllers/contactControllers');
const { authToken, isAdmin } = require('../middleware/authMiddleware');

router.get('/contact', authToken, isAdmin, getContact)
router.post('/contact/add', createContact);
router.delete('/contact/delete/:id', authToken, isAdmin, deleteContact);

module.exports = router;