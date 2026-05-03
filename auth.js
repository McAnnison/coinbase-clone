import jwt from 'jsonwebtoken';

/**
 * Verification middleware to protect private API endpoints.
 */
const protect = (req, res, next) => {
  let token;

  if (req.cookies?.token) {
    token = req.cookies.token;
  } else if (req.headers.authorization?.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      status: 'fail',
      message: 'Authentication required. Access denied.'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
    req.user = decoded;
    next();
  } catch (err) {
    if (req.cookies?.token) res.clearCookie('token');

    return res.status(401).json({
      status: 'error',
      message: 'Invalid or expired token.',
      error: err.message
    });
  }
};

export default protect;