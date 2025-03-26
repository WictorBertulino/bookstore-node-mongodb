import 'dotenv/config';
import app from './src/app.js'; // Importa o app do arquivo app.js
// Importa o dotenv para carregar as variáveis de ambiente
const PORT = 3000;

// Faz o servidor escutar na porta 3000 e imprime uma mensagem no console quando o servidor está rodando
app.listen(PORT, () => {
    console.log('Server running at http://localhost:3000/'); // Mensagem de log indicando que o servidor está rodando na porta 3000
});