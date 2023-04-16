import { NextFunction, Request, Response } from "express";
import * as Joi from "joi";
import { HandleType } from "./types";

export class UserValidationHandler {
  constructor(
    handleType: HandleType,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    switch (handleType) {
      case HandleType.VALIDATE_USER_LOGIN:
        this.validateUserLogin(req, res, next);
        break;
      case HandleType.VALIDATE_USER_SIGNUP:
        this.validateUserSignup(req, res, next);
        break;
      case HandleType.VALIDATE_USER_FORGOT_PASSWORD:
        this.validateUserForgotPassword(req, res, next);
        break;
    }
  }

  private validateUserLogin(req: Request, res: Response, next: NextFunction) {
    try {
      Joi.assert(
        req.body,
        Joi.object().keys({
          email: Joi.string().required(),
          password: Joi.string().required(),
        })
      );
      next();
    } catch (e) {
      return res.status(422);
    }
  }

  private validateUserSignup(req: Request, res: Response, next: NextFunction) {
    try {
      Joi.assert(
        req.body,
        Joi.object().keys({
          name: Joi.string().required(),
          email: Joi.string().required(),
          password: Joi.string().required(),
        })
      );
      next();
    } catch (e) {
      return res.status(422);
    }
  }

  private validateUserForgotPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      Joi.assert(
        req.body,
        Joi.object().keys({
          emailAddress: Joi.string().required(),
          password: Joi.string().required(),
        })
      );
      next();
    } catch (e) {
      return res.status(422);
    }
  }
}
