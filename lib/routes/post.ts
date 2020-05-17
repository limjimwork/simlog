import { Request, Response } from "express";
import postController from "../controllers/post";

export default class postRoutes {
  public PostController: postController = new postController();

  public routes(app: any): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successful.",
      });
    });

    app.route("/post").post(this.PostController.addNewPost);
  }
}
