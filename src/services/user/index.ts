import { UserSchema } from "../../schema/user";
import * as mongoose from "mongoose";
import { User } from "data-models/User";
import * as moment from "moment";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { appConfig } from "../../config";

const MUser = mongoose.model("User", UserSchema);

export class UserService {
  /**
   * User Login
   * @param req
   * @param res
   */
  public async login(user: Partial<User>) {
    try {
      const existingUser = await MUser.findOne({ email: user.email });

      if (!existingUser || !existingUser.password) return null;

      const isPasswordValid = await bcrypt.compare(
        user.password,
        existingUser.password
      );

      if (!isPasswordValid) return null;

      const token = jwt.sign(
        {
          u: {
            useremail: user.email,
            id: user.id,
          },
        },
        appConfig.jwtSecret,
        {
          expiresIn: "1d",
        }
      );
      const expirationDate = moment().add(1, "days").format();
      return { token, expirationDate };
    } catch (error) {
      console.log(`UserService:login request failed with error: ${error}`);
    }
  }

  /**
   * User Signup
   * @param req
   * @param res
   * @returns
   */
  public async signup(user: Partial<User>) {
    try {
      const existingUser = await MUser.findOne({ email: user.email });
      if (existingUser) {
        return null;
      }
      const passwordHash = await bcrypt.hash(
        user.password,
        appConfig.passwordSaltRounds
      );
      user.password = passwordHash;
      await MUser.create(user);
      const savedUser = await MUser.findOne({ email: user.email });
      return { savedUser: savedUser };
    } catch (error) {
      console.log(`UserService:signup request failed with error: ${error}`);
    }
  }

  /**
   * Reset Password
   * @param req
   * @param res
   */
  public async forgotPassword(user: Partial<User>) {
    try {
      const existingUser = await MUser.findOne({
        email: user.email,
      });

      if (!existingUser || !existingUser.password) return null;

      const isPasswordValid = await bcrypt.compare(
        user.password,
        existingUser.password
      );

      if (!isPasswordValid) return null;

      const passwordHash = await bcrypt.hash(
        user.password,
        appConfig.passwordSaltRounds
      );

      return await MUser.updateOne(
        { id: existingUser.id },
        { password: passwordHash }
      );
    } catch (error) {
      console.log(
        `UserService:forgotPassword request failed with error: ${error}`
      );
    }
  }
}

const userService = new UserService();
export default userService;
