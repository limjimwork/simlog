import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.configureRoutes();
    this.connectMongo();
  }

  private config(): void {
    dotenv.config();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private configureRoutes(): void {
    this.app.use("/api/user", require("./routes/user"));
    this.app.use("/api/article", require("./routes/article"));
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
