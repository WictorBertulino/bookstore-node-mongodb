import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";
// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos." })
    } else if (erro instanceof mongoose.Error.ValidationError) {
        var mensagem = Object.values(erro.errors)
            .map((valor) => valor.message)
            .join(", ");
        res.status(400).send({ message: mensagem })
    } else  if(erro instanceof NaoEncontrado){
        erro.enviarResposta(res);
    }
}

export default manipuladorDeErros;