import * as dotenv from "dotenv";

dotenv.config();

export const appConfig = {
  jwtSecret: process.env.JWT_SECRET,
  mongoURI: process.env.MONGO_URI,
  passwordSaltRounds: Number(process.env.PASSWORD_SALT_ROUNDS),
};
