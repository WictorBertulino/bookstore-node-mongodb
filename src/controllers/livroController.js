import livro from '../models/livro.js';
import { autor } from '../models/autor.js';

class LivroController {

    static async listrarLivros(req, res, next) {
        try {

            const lista = await livro.find({});
            res.status(200).json(lista);
        } catch (error) {
            next(error)
        }

    }
    static async listrarLivro(req, res, next) {
        try {
            const id = req.params.id;
            const lista = await livro.findById(id);
            res.status(200).json(lista);
        } catch (error) {
            next(error)
        }

    }

    static async atualizarLivro(req, res, next) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: 'Livro atualizado com sucesso',
            });
        } catch (error) {
            next(error)
        }

    }
    static async cadastrarLivro(req, res, next) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({
                message: 'Livro cadastrado com sucesso',
                livro: livroCriado
            });
        } catch (error) {

            next(error)
        }

    }

    static async deletarLivro(req, res,next) {

        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({
                message: 'Livro deletado com sucesso',
            })
        } catch (error) {
            next(error)
        }

    }

    static async listarLivrosPorEditora(req, res,next) {
        const editora = req.query.editora;
        try {
            const lista = await livro.find({ editora: editora });
            res.status(200).json(lista);
        } catch (error) {
            next(error)
        }
    }

}


export default LivroController;