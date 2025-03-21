import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import manipuladorDeErros from './middlewares/manipuladorDeErros.js';
import manipulador404 from './middlewares/manipulador404.js';
const conexao = await conectaNaDatabase();

conexao.on('error', (error) => {
    console.log('Erro ao conectar no banco de dados', error);
});


conexao.once('open', () => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
});
const app = express();

routes(app);
app.use(manipulador404);

app.use(manipuladorDeErros);
export default app; // Exporta o app para ser usado em outros arquivos

