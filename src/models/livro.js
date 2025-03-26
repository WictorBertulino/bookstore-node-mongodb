import mongoose from 'mongoose';
import { autorSchema } from './autor.js';
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String, required: true },
    preco: { type: Number, required: true },
    paginas: { type: Number, required: true },
    autor : { type: autorSchema, ref: 'autores' }
}, { versionKey: false })

const Livro = mongoose.model('livros', livroSchema);

export default Livro; // Exporta o modelo para ser usado em outros arquivos
