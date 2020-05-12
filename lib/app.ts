import * as express from "express";
import * as bodyParser from "body-parser";

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.connectMongo();
  }

  private config(): void {
    const dotenv = require("dotenv");
    dotenv.config();
    console.log(process.env.MONGO_URI);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private connectMongo(): void {
    const mongoURI = process.env.MONGO_URI;
    const mongoose = require("mongoose");
    mongoose
      .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => console.log("MongoDB Connected..."))
      .catch((err) => console.log(err));
  }

  public listen(port: number, cb: () => void): void {
    this.app.listen(port, cb);
  }
}

export default App;
