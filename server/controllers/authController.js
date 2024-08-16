// const passport = require('passport');

// exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

// exports.googleAuthCallback = passport.authenticate('google', {
//     failureRedirect: '/',
//     successRedirect: '/dashboard'
// });

// exports.logout = (req, res) => {
//     req.logout();
//     res.redirect('/');
// };
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, user });
  } catch (err) {
    res.status(400).json({ message: 'User registration failed' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, user });
  } catch (err) {
    res.status(400).json({ message: 'Login failed' });
  }
};
