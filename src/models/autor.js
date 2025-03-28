import mongoose from 'mongoose';

const autorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {
        type: String,
        required: [true, 'O campo NOME é obrigatório'],
    },
    nacionalidade: { type: String}
}, { versionKey: false })

const autor = mongoose.model('autores', autorSchema);

export  { autor , autorSchema}; // Exporta o modelo para ser usado em outros arquivos