// const express = require('express');
// const passport = require('passport');
// const authController = require('../controllers/authController');
// const router = express.Router();

// router.get('/google', authController.googleAuth);
// router.get('/google/callback', authController.googleAuthCallback);
// router.get('/logout', authController.logout);

// module.exports = router;
const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
