import { Request, Response } from "express";
import cardService from "../../services/card";

export class CardController {
  /**
   * Create a Card
   * @param req
   * @param res
   * @returns
   */
  public async create(req: Request, res: Response) {
    try {
      const cardBody = req.body;
      const savedCard = await cardService.create(cardBody);
      return res.status(200).send({ savedCard: savedCard });
    } catch (error) {
      console.log(`CardController:create request failed with error: ${error}`);
      return res.status(500).send("error while creating card");
    }
  }

  /**
   * List Cards
   * @param req
   * @param res
   * @returns
   */
  public async list(req: Request, res: Response) {
    try {
      const cards = await cardService.list();
      return res.status(200).send({ cards: cards });
    } catch (error) {
      console.log(`CardController:list request failed with error: ${error}`);
      return res.status(500).send("error while listing cards");
    }
  }
}
