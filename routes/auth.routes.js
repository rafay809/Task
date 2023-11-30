const express = require('express');
const router = express.Router();
const { signup, login, updatePassword } = require('../controllers/auth.controller');

router.post('/signup', signup);
router.post('/login', login);
router.post('/update-password', updatePassword);

module.exports = router;
