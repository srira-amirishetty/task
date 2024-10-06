const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log("Token received:", token);
    if (!token) return res.status(401).json({ message: 'Access denied' });
  
    try {
      const verified = jwt.verify(token, "jwt-secret");
      console.log("Token verified:", verified);
      req.user = verified;
      next();
    } catch (err) {
      console.error("Token verification error:", err);
      res.status(400).json({ message: 'Invalid token' });
    }
  };
  
  module.exports = authenticateToken;