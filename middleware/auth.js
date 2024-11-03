const jwt = require("jsonwebtoken");

// middleware/auth.js
module.exports = function UserAuth(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "user not loggedin",
    });
  }

  const isTokenValid = jwt.verify(token, process.env.JWT_USER_KEY);
  try {
    if (isTokenValid) {
      req.user = isTokenValid;
      next();
    } else {
      return res.status(404).json({
        success: false,
        message: "Unauthorized User",
      });
    }
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Invalid token",
    });
  }
};

// middleware/auth.js
module.exports = function AdminAuth(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Admin not loggedin",
    });
  }

  try {
    const isTokenValid = jwt.verify(token, JWT_ADMIN_KEY);
    if (isTokenValid) {
      req.admin = isTokenValid;
      next();
    } else {
      return res.status(404).json({
        success: false,
        message: "Unauthorized Admin",
      });
    }
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Invalid token",
    });
  }
};
