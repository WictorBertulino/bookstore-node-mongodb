import { autor } from "../models/autor.js";
import mongoose from "mongoose";
class AutorController {

    static listarAutores = async (req, res) => {
        try {
          const autoresResultado = await autores.find();
          res.status(200).json(autoresResultado);
        } catch (erro) {
          res.status(500).json({ message: "Erro interno no servidor" });
        }
      };
      
    static  listarAutor = async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({
                    message: "ID inválido"
                });
                return;
            }
            const lista = await autor.findById(id);
            res.status(200).json(lista);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }

    }

    static  atualizarAutor = async(req, res) => {
        const id = req.params.id;
        await autor.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            message: "Autor atualizado com sucesso",
        });
    }
    static  cadastrarAutor = async(req, res) => {

        try {
            const livroCriado = await autor.create(req.body);
            res.status(201).json({
                message: "Autor cadastrado com sucesso",
                autor: livroCriado
            });
        } catch (error) {

            res.status(500).json({
                message: error.message
            });
        }

    }

    static  deletarAutor = async (req, res)=> {
        const id = req.params.id;
        await autor.findByIdAndDelete(id);
        res.status(200).json({
            message: "Autor deletado com sucesso",
        })
    }

    
}


export default AutorController;