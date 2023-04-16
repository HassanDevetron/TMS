import { Request, Response } from "express";
import userService from "../../services/user";

export class UserController {
  /**
   * User Login
   * @param req
   * @param res
   */
  public async login(req: Request, res: Response) {
    try {
      const userBody = req.body;
      const token = await userService.login(userBody);
      if (!token) {
        return res.status(401).send("invalid credentials");
      }
      return res.status(200).send({ token: token });
    } catch (error) {
      console.log(`request failed with error: ${error}`);
    }
  }

  /**
   * User Signup
   * @param req
   * @param res
   * @returns
   */
  public async signup(req: Request, res: Response) {
    try {
      const userBody = req.body;
      const savedUser = await userService.signup(userBody);
      if (!savedUser) {
        return res.status(409).send("Email already exists");
      }
      return res.status(200).send({ savedUser: savedUser });
    } catch (error) {
      console.log(`request failed with error: ${error}`);
      return res.status(500).send("error while creating user");
    }
  }

  /**
   * Reset Password
   * @param req
   * @param res
   */
  public async forgotPassword(req: Request, res: Response) {
    try {
      const userBody = req.body;
      const savedUser = await userService.forgotPassword(userBody);
      if (!savedUser) {
        return res.status(200).send("Enter the correct password");
      }
      return res.status(200).send({ savedUser: savedUser });
    } catch (error) {
      console.log(`request failed with error: ${error}`);
    }
  }
}
