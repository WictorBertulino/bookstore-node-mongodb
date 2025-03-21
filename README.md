# CRUD de Livros e Autores com Node.js, Express e MongoDB

Este projeto é um CRUD simples para gerenciar livros e autores, desenvolvido com **Node.js**, **Express** e **MongoDB**, utilizando **Mongoose** como ORM.

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/WictorBertulino/bookstore-node-mongodb
   cd bookstore-node-mongodb
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure a conexão com o banco de dados:**
   - Crie um arquivo **.env** na raiz do projeto e adicione:
     ```env
     DB_CONNECTION_STRING=mongodb://seu-usuario:senha@localhost:27017/seu-banco
     ```

4. **Inicie o servidor:**
   ```bash
   npm run dev
   ```

## 📌 Rotas da API

### 📚 Livros
- `GET /livros` → Lista todos os livros
- `GET /livros/:id` → Busca um livro pelo ID
- `POST /livros` → Cria um novo livro (
- {
    "titulo": "O Simarrilion",
    "editora": "jrr tolkien",
    "preco": 10,
    "paginas": 200,
    "autor":"ID_AUTOR"
  }
  )
- `PUT /livros/:id` → Atualiza um livro existente
- `DELETE /livros/:id` → Remove um livro

### ✍️ Autores
- `GET /autores` → Lista todos os autores
- `GET /autores/:id` → Busca um autor pelo ID
- `POST /autores` → Cria um novo autor(
- {
    "nome": "Monteiro Lobato",
    "nacionalidade": "Brasileiro"
  
}
)
- `PUT /autores/:id` → Atualiza um autor existente
- `DELETE /autores/:id` → Remove um autor

