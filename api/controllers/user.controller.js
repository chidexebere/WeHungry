import UserService from "../services/user.service";

/**
 * meal controller performs controls  request and res -
 * create a new user,
 * sign in user,
 */
class UserController {
  /**
   * @description create a new user from a user object
   * @param {object} req
   * @param {object} res
   * @returns {object} created user
   */
  static async createUser(req, res) {
    const user = req.body;

    if (!req.body.email) {
      res.error(400, "Email Address is required");
      return res;
    }
    if (!req.body.password) {
      res.error(400, "Password is required");
      return res;
    }
    // if (!req.body.roleId) {
    //   user.roleId = 1;
    // }

    try {
      const createdUser = await UserService.createUser(user);
      if (createdUser) {
        res.status(201, "Account was successfully created!", createdUser);
      }
      return res;
    } catch (error) {
      res.error(400, error.message);
      return res;
    }
  }

  /**
   * @description login user
   * @param {object} req
   * @param {object} res
   * @returns {object} created user
   */
  static async loginUser(req, res) {
    const login = req.body;

    if (!login.email) {
      res.error(400, "Email Address is required");
      return res;
    }
    if (!login.password) {
      res.error(400, "Password is required");
      return res;
    }

    try {
      const token = await UserService.loginUser(login);
      if (token == null) {
        res.error(404, "User profile cannot be found!");
      } else if (token === "string") {
        const invalidCredentials = token;
        res.error(400, invalidCredentials);
      } else {
        const tokenres = {
          token
        };
        res.status(200, "Successfully log in user", tokenres);
      }
      return res;
    } catch (error) {
      res.error(400, error.message);
      return res;
    }
  }
}

export default UserController;
