import { autor, livros } from '../models/index.js';


class LivroController {

    static async listrarLivros(req, res, next) {
        try {
            const { limite = 1, pagina = 1 ,campoOrdenacao = '_id' ,ordem = -1} = req.query;
            const lista = await livros.find({})
                .sort({[campoOrdenacao] : ordem})
                .skip((pagina - 1) * limite)
                .limit(limite)
                .populate('autor')
                .exec();
            res.status(200).json(lista);
        } catch (error) {
            next(error)
        }

    }
    static async listrarLivro(req, res, next) {
        try {
            const id = req.params.id;
            const lista = await livros.findById(id);
            res.status(200).json(lista);
        } catch (error) {
            next(error)
        }

    }

    static async atualizarLivro(req, res, next) {
        try {
            const id = req.params.id;
            await livros.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: 'Livro atualizado com sucesso',
            });
        } catch (error) {
            next(error)
        }

    }
    static cadastrarLivro = async (req, res, next) => {
        try {
            let livro = new livros(req.body);

            const livroResultado = await livro.save();

            res.status(201).send(livroResultado.toJSON());
        } catch (error) {
            next(error)

        }
    };

    static async deletarLivro(req, res, next) {

        try {
            const id = req.params.id;
            await livros.findByIdAndDelete(id);
            res.status(200).json({
                message: 'Livro deletado com sucesso',
            })
        } catch (error) {
            next(error)
        }

    }

    static async listarLivrosPorFiltro(req, res, next) {
        const busca = await processaBusca(req.query);



        try {
            if (busca !== null) {


                const lista = await livros.find(busca).populate('autor');


                res.status(200).json(lista);
            } else {
                res.status(200).json([]);
            }
        } catch (error) {
            next(error)
        }
    }

}
async function processaBusca(parametros) {
    const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;
    let busca = {};
    if (editora) busca.editora = { $regex: editora, $options: 'i' };
    if (titulo) busca.titulo = { $regex: titulo, $options: 'i' };
    if (minPaginas || maxPaginas) busca.paginas = {};
    if (minPaginas) busca.paginas.$gte = minPaginas;
    if (maxPaginas) busca.paginas.$lte = maxPaginas;
    if (nomeAutor) {
        const aut = await autor.findOne({ nome: { $regex: nomeAutor, $options: 'i' } });
        if (aut !== null) {
            busca.autor = aut._id;
        } else {
            busca = null;
        }
    }


    return busca;
}

export default LivroController;