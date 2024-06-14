# API Simples de Gerenciamento de Usuários

Esta é uma API simples desenvolvida em Node.js utilizando o framework Express, que permite o gerenciamento básico de usuários com nome e tipo de patins favorito.

## Funcionalidades

- Listagem de todos os usuários
- Recuperação de um usuário específico por ID
- Adição de um novo usuário
- Atualização de informações de um usuário existente
- Remoção de um usuário existente

## Rotas

- **GET /users**: Retorna todos os usuários cadastrados.
- **GET /users/:id**: Retorna um usuário específico pelo seu ID.
- **POST /users**: Adiciona um novo usuário. Requer um corpo JSON com os campos `name` e `patins`:
```
POST /users
Content-Type: application/json

{
  "name": "Nome do Novo Usuário",
  "patins": "Marca do Patins"
}
```
- **PUT /users/:id**: Atualiza as informações de um usuário existente pelo seu ID. Aceita um corpo JSON com os campos `name` e/ou `patins`:
```
PUT /users/:id
Content-Type: application/json

{
  "name": "Nome Atualizado",
  "patins": "Marca de Patins Atualizada"
}
```
- **DELETE /users/:id**: Remove um usuário pelo seu ID.
