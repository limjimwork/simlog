import { Router, Request, Response } from "express";
import Article from "../models/article";

const router = Router();

router.get("/get", (req: Request, res: Response) => {
  res.status(200).send({
    message: "GET request successful.",
  });
});

router.post("/post", (req: Request, res: Response) => {
  let newPost = new Article(req.body);
  newPost.save((err, post) => {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
});

module.exports = router;
