import mongoose from "mongoose";

async function conectaNaDatabase() {
    
mongoose.connect(process.env.DB_CONNECTION_STRING);

return mongoose.connection;
}

export default conectaNaDatabase; // Exporta a função para ser usada em outros arquivos