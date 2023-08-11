import mongoose from "mongoose";
import Errobase from "../erros/ErroBase.js";
import ReqIncorreta from "../erros/ReqIncorreta.js";
import ErrorValidacao from "../erros/ErroValidacao.js";
import ErroBase from "../erros/ErroBase.js";

// eslint-disable-next-line no-unused-vars
export default function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new ReqIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErrorValidacao(erro).enviarResposta(res);
  } else if (erro instanceof mongoose.Error.DocumentNotFoundError) {
    res.status(404).send({ message: "Id do Autor não localizado." });
  } else if (erro instanceof ErroBase) {
    erro.enviarResposta(res);
  } else {
    new Errobase().enviarResposta(res);
  }
}
