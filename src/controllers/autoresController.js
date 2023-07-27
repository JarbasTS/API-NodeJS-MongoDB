import autores from "../models/Autor.js";

class AutorController {
  static listarAutores = async (req, res) => {
    try {
      const data = await autores.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send({ message: `Erro ao consultar autores: ${err.message}` });
    }
  };

  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await autores.findById(id);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).send({ message: `Erro ao consultar autor: ${err.message}` });
    }
  };

  static cadastrarAutor = async (req, res) => {
    try {
      let autor = new autores(req.body);
      await autor.save();
      res.status(201).send("Autor foi cadastrado com sucesso");
    } catch (err) {
      res.status(500).send({ message: `${err.message} Erro ao cadastrar autor.` });
    }
  };

  static atualizarAutor = async (req, res) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Autor foi atualizado com sucesso" });
    } catch (err) {
      res.status(500).send({ message: `${err.message} Erro ao atualizar autor.` });
    }
  };

  static deletarAutor = async (req, res) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      res.status(200).send({ message: "Autor foi deletado com sucesso" });
    } catch (err) {
      res.status(500).send({ message: `${err.message} Erro ao deletar Autor.` });
    }
  };
}

export default AutorController;
