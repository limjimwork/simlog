import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import postRoutes from "./routes/post";

class App {
  private app: express.Application;
  private PostRoutes: postRoutes = new postRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.connectMongo();
    this.PostRoutes.routes(this.app);
  }

  private config(): void {
    dotenv.config();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private connectMongo(): void {
    const MONGO_URI = process.env.MONGO_URI;
    mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => console.log("MongoDB Connected."))
      .catch((err) => console.log(err));
  }

  public listen(port: string, cb: () => void): void {
    this.app.listen(port, cb);
  }
}

export default App;
