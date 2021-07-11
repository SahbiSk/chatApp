const jwt = require("jsonwebtoken");
const jwtExpires = process.env.jwtExpires;
const jwtKey = process.env.jwtKey;

function auth(req, res, next) {
  try {
    let token = req.headers.token;
    if (!token) {
      let refreshToken = req.headers.refreshToken;
      if (!refreshToken) {
        return res
          .status(401)
          .json({ error: "Access denied. No token provided " });
      } else {
        const { _id } = jwt.verify(refreshToken, jwtKey);
        req.headers.token = jwt.sign({ _id }, jwtKey, jwtExpires);
      }
    } else {
      const { _id } = jwt.verify(token, jwtKey);
      req.userId = _id;
    }

    next();
  } catch (e) {
    res.status(400).json("Invalid token");
  }
}

module.exports = auth;
