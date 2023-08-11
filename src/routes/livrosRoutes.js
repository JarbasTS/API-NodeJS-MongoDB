import express from "express";
import LivroController from "../controllers/livrosController.js";
import paginar from "../middlewares/paginar.js";

const livros = express.Router();

livros.get("/livros", LivroController.listarLivros, paginar);

livros.get("/livros/busca", LivroController.listarLivrosPorFiltro, paginar);

livros.get("/livros/:id", LivroController.listarLivroPorId);

livros.post("/livros", LivroController.cadastrarLivro);

livros.put("/livros/:id", LivroController.atualizarLivro);

livros.delete("/livros/:id", LivroController.deletarLivro);

export default livros;
