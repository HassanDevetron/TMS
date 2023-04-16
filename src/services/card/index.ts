import { CardSchema } from "../../schema/card";
import * as mongoose from "mongoose";
import { Card } from "data-models/Card";

const MCard = mongoose.model("Card", CardSchema);

class CardService {
  /**
   * Create a Card
   * @param req
   * @param res
   * @returns
   */
  public async create(card: Partial<Card>) {
    try {
      const savedCard = await MCard.create(card);
      return savedCard;
    } catch (error) {
      console.log(`CardService:create request failed with error: ${error}`);
    }
  }

  /**
   * List Cards
   * @param req
   * @param res
   * @returns
   */
  public async list() {
    try {
      const cards = await MCard.find({});
      return { cards: cards };
    } catch (error) {
      console.log(`CardService:list request failed with error: ${error}`);
    }
  }
}
const cardService = new CardService();
export default cardService;
