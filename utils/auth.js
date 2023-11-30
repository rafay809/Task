const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
    // Add other user-related data to the payload as needed
  };

  const options = {
    expiresIn: '1h', // Token expiration time
  };

  return jwt.sign(payload, secretKey, options);
}

function verifyToken(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null; // Token verification failed
  }
}

module.exports = { generateToken, verifyToken };
