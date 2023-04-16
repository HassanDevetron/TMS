import { appConfig } from "./src/config";
import * as express from "express";
import * as mongoose from "mongoose";
import { CardRoutes } from "./src/routes/card";
import { UserRoutes } from "./src/routes/user";
class App {
  public app: express.Application;
  public cardRoutes: CardRoutes = new CardRoutes();
  public userRoutes: UserRoutes = new UserRoutes();
  public mongoUrl = appConfig.mongoURI as string;

  constructor() {
    this.app = express();
    this.config();
    this.initializeRoutes();
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    (mongoose.Promise as any) = global.Promise;
    mongoose.connect(this.mongoUrl);
  }

  private initializeRoutes(): void {
    this.cardRoutes.routes(this.app);
    this.userRoutes.routes(this.app);
  }
}

export default new App().app;
