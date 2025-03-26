import mongoose from 'mongoose';
import NaoEncontrado from '../erros/NaoEncontrado.js';

function manipuladorDeErros(erro, req, res) {
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: 'Um ou mais dados fornecidos estão incorretos.' })
    } else if (erro instanceof mongoose.Error.ValidationError) {
        var mensagem = Object.values(erro.errors)
            .map((valor) => valor.message)
            .join(', ');
        res.status(400).send({ message: mensagem })
    } else  if(erro instanceof NaoEncontrado){
        erro.enviarResposta(res);
    }
}

export default manipuladorDeErros;