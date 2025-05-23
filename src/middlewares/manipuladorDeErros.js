import mongoose from 'mongoose';
import NaoEncontrado from '../erros/NaoEncontrado.js';
import ErroValidacao from '../erros/ErroValidacao.js';
import ErroBase from '../erros/ErroBase.js';
import RequisicaoIncorreta from '../erros/RequisicaoIncorreta.js';

function manipuladorDeErros(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviarResposta(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).enviarResposta(res);
    } else  if(erro instanceof NaoEncontrado){
        erro.enviarResposta(res);
    }else{
        new ErroBase().enviarResposta(res);
    }
}

export default manipuladorDeErros;