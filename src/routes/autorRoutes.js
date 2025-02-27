import express from 'express';

import AutorController from '../controllers/autorController.js';

const router = express.Router();

router.get('/autores', AutorController.listarAutores);
router.get('/autores/:id', AutorController.listarAutor);
router.put('/autores/:id', AutorController.atualizarAutor);
router.post('/autores', AutorController.cadastrarAutor);
router.delete('/autores/:id', AutorController.deletarAutor);

export default router; // Exporta o router para ser usado em outros arquivos