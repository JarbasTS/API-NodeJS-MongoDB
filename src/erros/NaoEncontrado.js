import Errobase from "./ErroBase.js";

class NaoEncontrado extends Errobase {
  constructor(mensagem = "Endpoint não encontrado.") {
    super(mensagem, 404);
  }
}

export default NaoEncontrado;
