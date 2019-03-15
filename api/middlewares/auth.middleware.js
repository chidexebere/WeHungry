import jwt from "jsonwebtoken";

/**
 * @description - use for decoding token
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 * @param {String} token
 *
 * @returns {Object} Object
 */
const decodeToken = (req, res, next, token) => {
  jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
    if (!error) {
      req.token = decode;
      return next();
    }
    res.error(400, "Token Not Valid");
    return res;
  });
};

/**
 * @description - User's Authentication Middleware
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 *
 * @returns {Object} Object
 */
const AuthMiddleware = (req, res, next) => {
  let token =
    req.headers["x-access-token"] ||
    req.headers.Authorization ||
    req.headers.token ||
    req.headers.authorization;

  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (process.env.NODE_ENV === "test") {
    if (!token) {
      token = 1;
    }
    if (typeof token === "number") {
      req.token = { user_id: token };
      return next();
    }
    if (typeof token === "string") {
      return decodeToken(req, res, next, token);
    }
  }

  if (token) {
    return decodeToken(req, res, next, token);
  }

  res.error(400, "Please assign a access token as header!");
  return res;
};

export default AuthMiddleware;
