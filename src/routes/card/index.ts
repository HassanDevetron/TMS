import { Application, Request, Response } from "express";
import { CardController } from "../../controllers/card";

export class CardRoutes {
  public cardController: CardController = new CardController();

  public routes(app: Application): void {
    // Base route
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({ message: "GET request success" });
    });

    // Create a card
    app.route("/card/create").post(this.cardController.create);

    // List cards
    app.route("/card/list").get(this.cardController.list);
  }
}
