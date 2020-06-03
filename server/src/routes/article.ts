import { Router, Request, Response } from "express";
import Article from "../models/article";

const router = Router();

router.get("/getArticle", (req: Request, res: Response) => {
  let filter = {};
  if (req.query.category) {
    filter["category"] = req.query.category;
  }
  Article.find(filter).exec((err, article) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, article });
  });
});

router.post("/postArticle", (req: Request, res: Response) => {
  let newPost = new Article(req.body);
  newPost.save((err, post) => {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
});

module.exports = router;
