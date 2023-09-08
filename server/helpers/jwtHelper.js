const JWT = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const createNewError = require("http-errors");

module.exports = {
  signAccessToken: (userId, email, username) => {
    return new Promise((resolve, reject) => {
      const payload = {
        aud: {
          userId,
          email,
          username,
        },
      };
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: "10m",
        issuer: "ContactManagerAPI",
      };
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.log(err.message);
          reject(createNewError.InternalServerError());
        }
        resolve(token);
      });
    });
  },
  verifyAccessToken: asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      const token = authHeader.split(" ");
      JWT.verify(token[1], process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          return next(createNewError.Unauthorized());
        }
        req.user = decoded.aud;
        next();
      });
    } else {
      next(createNewError.Unauthorized());
    }
  }),
};
