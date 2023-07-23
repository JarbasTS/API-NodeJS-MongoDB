import App from "./src/app.js";
import "dotenv/config.js";

const port = process.env.PORT;

App.listen(port, () => {
  console.log("Api rodando a milhão");
});
