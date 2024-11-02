// middleware/auth.js
module.exports = function UserAuth(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Unauthorized user",
    });
  }

  try {
    next();
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
      message: "Unauthorized user",
    });
  }

  try {
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Invalid token",
    });
  }
};
