import hashPassword from "../utils/passHasher";
import validPassword from "../utils/validatePassword";
import database from "../database/models";
import jwtSigner from "../utils/jwtSigner";

/**
 * This is allows user to create an account and login
 */
class UserService {
  /**
   * @description Create a new customer
   * @returns {object} the registered user details
   */
  static async createUser(user) {
    try {
      const { password, customer_id } = user;

      const isUser = await database.User.findOne({
        where: { email: user.email }
      });

      if (isUser) {
        throw new Error("User with this email address already exist!");
      }

      // Create user
      user.password = hashPassword(password);

      const createdUser = await database.User.create(user);

      const { email, id: user_id } = createdUser;

      const payload = {
        user_id,
        customer_id
      };

      const token = jwtSigner(payload);
      const userProfile = {
        email,
        token
      };

      return userProfile;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description Create a new caterer
   * @returns {object} the registered user details
   */
  static async createUser(user) {
    try {
      const { password, caterer_id } = user;

      const isUser = await database.User.findOne({
        where: { email: user.email }
      });

      if (isUser) {
        throw new Error("User with this email address already exist!");
      }

      // Create user
      user.password = hashPassword(password);

      const createdUser = await database.User.create(user);

      const { email, id: user_id } = createdUser;

      const payload = {
        user_id,
        caterer_id
      };

      const token = jwtSigner(payload);
      const userProfile = {
        email,
        token
      };

      return userProfile;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description Takes a new meal object
   * @param {object} meal
   * @returns {object} created meal
   */
  static async loginUser(login) {
    try {
      const user = await database.User.findOne({
        where: { email: login.email }
      });

      if (user) {
        const bcryptResponse = await validPassword(
          login.password,
          user.password
        );
        if (bcryptResponse) {
          const { id: user_id, password: userPassword, ...data } = user.get();
          const userProfile = { user_id, ...data };
          const token = jwtSigner(userProfile);
          return token;
        }
        // return 'Invalid user credentials';
        throw new Error("Invalid user credentials");
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
export default UserService;
