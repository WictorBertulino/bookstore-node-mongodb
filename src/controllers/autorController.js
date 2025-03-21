import { autor } from "../models/autor.js";
class AutorController {

    static listarAutores = async (req, res, next) => {
        try {
            const autoresResultado = await autor.find();
            res.status(200).json(autoresResultado);
        } catch (error) {
            next(error)
        }
    };

    static listarAutor = async (req, res, next) => {
        try {
            const id = req.params.id;
            const lista = await autor.findById(id);

            if (lista !== null) {
                res.status(200).json(lista);
            } else {
                res.status(404).json({
                    message: "Autor não encontrado"
                });
            }
        } catch (error) {
            next(error)
        }

    }

    static atualizarAutor = async (req, res, next) => {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "Autor atualizado com sucesso",
            });
        } catch (error) {
            next(error)
        }

    }
    static cadastrarAutor = async (req, res, next) => {

        try {
            const livroCriado = await autor.create(req.body);
            res.status(201).json({
                message: "Autor cadastrado com sucesso",
                autor: livroCriado
            });
        } catch (error) {
            next(error)
        }

    }

    static deletarAutor = async (req, res, next) => {

        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({
                message: "Autor deletado com sucesso",
            })
        } catch (error) {
            next(error)
        }

    }


}


export default AutorController;