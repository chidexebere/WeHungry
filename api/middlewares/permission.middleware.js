/**
 * @description - User's Authentication Middleware
 *
 * @param {Object} request
 * @param {Object} res
 * @param {Function} next
 *
 * @returns {Object} Object
 */
const PermissionMiddleWare = (req, res, next) => {
  if (!req.token) {
    res.error(
      400,
      "How the hell did you get pass the authentication middleware"
    );
    return res;
  }

  const { user_id } = req.token;
  if (user_id === null) {
    res.error(403, "You do not have the permission to perform this operation");
    return res;
  }
  next();
};

export default PermissionMiddleWare;
