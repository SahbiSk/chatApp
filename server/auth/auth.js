const jwt = require("jsonwebtoken");
const jwtKey = process.env.jwtKey;

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({ error: "Access denied. No token provided " });
  try {
    const decoded = jwt.verify(token, jwtKey);
    req.token = decoded;
    next();
  } catch (e) {
    res.status(400).json("Invalid token");
  }
}

module.exports = auth;
