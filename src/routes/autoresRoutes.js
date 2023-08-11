import express from "express";
import AutorController from "../controllers/autoresController.js";
import paginar from "../middlewares/paginar.js";

const autores = express.Router();

autores.get("/autores", AutorController.listarAutores, paginar);

autores.get("/autores/:id", AutorController.listarAutorPorId);

autores.post("/autores", AutorController.cadastrarAutor);

autores.put("/autores/:id", AutorController.atualizarAutor);

autores.delete("/autores/:id", AutorController.deletarAutor);

export default autores;
