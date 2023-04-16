import { NextFunction, Request, Response } from "express";
import * as Joi from "joi";
import { HandleType } from "./types";

export class CardValidationHandler {
  constructor(
    handleType: HandleType,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    switch (handleType) {
      case HandleType.VALIDATE_CARD_CREATE:
        this.validateCardCreate(req, res, next);
        break;
    }
  }

  private validateCardCreate(req: Request, res: Response, next: NextFunction) {
    try {
      Joi.assert(
        req.body,
        Joi.object().keys({
          title: Joi.string().required(),
          description: Joi.string().required(),
          storyPoints: Joi.string().required(),
        })
      );
      next();
    } catch (e) {
      return res.status(422);
    }
  }
}
