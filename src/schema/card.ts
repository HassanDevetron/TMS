import * as mongoose from "mongoose";

const Schema = mongoose.Schema;
export const CardSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  storyPoints: {
    type: Number,
  },
});
