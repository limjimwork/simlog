import App from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const app = new App();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT + ".");
});
