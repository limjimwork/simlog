import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    writer: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let Article = mongoose.model("Article", articleSchema);

export default Article;
