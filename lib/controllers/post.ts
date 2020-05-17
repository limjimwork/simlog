import { Request, Response } from "express";
import Post from "../models/post";

export default class postController {
  public addNewPost(req: Request, res: Response) {
    let newPost = new Post(req.body);

    newPost.save((err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  }
}
