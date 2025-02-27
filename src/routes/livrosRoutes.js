import express from 'express';
import LivroController from '../controllers/livroController.js';


const router = express.Router();
//o express necessita que as rotas de maior complexidade venha primeiro ,
//  pois ele irá interpretar a primeira rota que ele encontrar
//e não irá interpretar as demais rotas
router.get('/livros', LivroController.listrarLivros);
router.get('/livros/busca', LivroController.listarLivrosPorEditora);
router.get('/livros/:id', LivroController.listrarLivro);
router.put('/livros/:id', LivroController.atualizarLivro);
router.post('/livros', LivroController.cadastrarLivro);
router.delete('/livro/:id', LivroController.deletarLivro);

export default router; // Exporta o router para ser usado em outros arquivos