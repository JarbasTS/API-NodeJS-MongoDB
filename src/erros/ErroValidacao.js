import ReqIncorreta from "./ReqIncorreta.js";

class ErrorValidacao extends ReqIncorreta {
  constructor(erro) {
    const mensagensErro = Object.values(erro.errors)
      .map((erro) => erro.message)
      .join("; ");

    super(`Os seguintes erros foram econtradros: ${mensagensErro}`);
  }
}

export default ErrorValidacao;
