import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    titulo: {
        type: String, required: true
    },
    editora: {
        type: String,
        required: [true, 'A editora é obrigatória'],
        enum: {
            values: ['Casa do código', 'Alura', 'Novatec'],
            message: '{VALUE} não é uma editora válida'
        }
    },
    preco: {
        type: Number,
        required: true
    },
    paginas: {
        type: Number,
        validate:{
            validator: function(valor){
                return valor >= 10 && valor <= 5000;
            },
            message: 'O número de páginas deve ser maior que 10 e 5000'
        }
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'autores'
    }
},
{
    versionKey: false

})

const Livro = mongoose.model('livros', livroSchema);

export default Livro; // Exporta o modelo para ser usado em outros arquivos
