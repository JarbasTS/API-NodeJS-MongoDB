import livros from "../models/Livros.js";

class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const data = await livros.find().populate("autor");
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send({ message: `Erro ao consultar livros: ${err.message}` });
    }
  };

  static listarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await livros.findById(id).populate("autor", "nome");
      res.status(200).json(data);
    } catch (err) {
      res.status(400).send({ message: `Erro ao consultar livro: ${err.message}` });
    }
  };

  static listarLivrosPorEditora = async (req, res) => {
    try {
      const editora = req.query.editora;
      const data = await livros.find({ editora: editora });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send({ message: `Erro ao consultar livros: ${err.message}` });
    }
  };

  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).send("Livro foi cadastrado com sucesso");
    } catch (err) {
      res.status(500).send({ message: `${err.message} Erro ao cadastrar livro.` });
    }
  };

  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Livro foi atualizado com sucesso" });
    } catch (err) {
      res.status(500).send({ message: `${err.message} Erro ao atualizar livro.` });
    }
  };

  static deletarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(200).send({ message: "Livro foi deletado com sucesso" });
    } catch (err) {
      res.status(500).send({ message: `${err.message} Erro ao deletar livro.` });
    }
  };
}

export default LivroController;
