const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  console.log("hi");
  try {
    console.log("hello");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.userId }; 
    console.log('decoded', req.user);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
