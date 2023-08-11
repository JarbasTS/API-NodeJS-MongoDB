import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

db()
  .then(() => console.log("Conectado ao Atlas com sucesso!"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

routes(app);

app.use(manipulador404);

app.use(manipuladorDeErros);

export default app;
