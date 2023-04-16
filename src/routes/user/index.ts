import { Application, Request, Response } from "express";
import { UserController } from "../../controllers/user";

export class UserRoutes {
  public userController: UserController = new UserController();

  public routes(app: Application): void {
    // Base route
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({ message: "GET request success" });
    });

    // sign up
    app.route("/user/signup").post(this.userController.signup);

    // login
    app.route("/user/login").post(this.userController.login);

    // forgot password
    app.route("/user/forgot-password").post(this.userController.forgotPassword);
  }
}
