import App from "./app";

const PORT = 5000;
const app = new App();

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
