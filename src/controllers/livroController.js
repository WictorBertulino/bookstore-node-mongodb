import livro from '../models/livro.js';
import { autor } from '../models/autor.js';
import mongoose from "mongoose";
class LivroController {

    static async listrarLivros(req, res) {
        const lista = await livro.find({});
        res.status(200).json(lista);
    }
    static async listrarLivro(req, res) {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({
                    message: "ID inválido"
                });
                return;
            }
            const lista = await livro.findById(id);
            res.status(200).json(lista);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }

    }

    static async atualizarLivro(req, res) {
        const id = req.params.id;
        await livro.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            message: "Livro atualizado com sucesso",
        });
    }
    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc} };
            console.log(livroCompleto);
            
            
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({
                message: "Livro cadastrado com sucesso",
                livro: livroCriado
            });
        } catch (error) {

            res.status(500).json({
                message: error.message
            });
        }

    }

    static async deletarLivro(req, res) {
        const id = req.params.id;
        await livro.findByIdAndDelete(id);
        res.status(200).json({
            message: "Livro deletado com sucesso",
        })
    }

    static async listarLivrosPorEditora(req, res) { 
        const editora = req.query.editora;
        try {
            const lista = await livro.find({editora: editora});
            res.status(200).json(lista);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
    
}


export default LivroController;