# Documentação - Rotas de Bairros (`/neighborhoods`)

Base de integração para o consumo das rotas de bairros da API.

---

## Modelo de Dados (`TypeScript`)

```typescript
export interface Neighborhood {
  id: number
  name: string
  creation_date: Date
}
```

---
## EndPoints

### 1. Listar Todos os Bairros
Retorna a listagem completa dos bairros cadastrados.

- **Método:** `GET`
- **Endpoint:** `/neighborhoods`
- **Query Params:** Nenhum

#### Resposta de Sucesso (`200 OK`)
```json
[
    {
        "id": 2,
        "name": "CALHEIROS",
        "creation_date": "2026-08-22T23:30:02.477Z"
    },
    {
        "id": 1,
        "name": "CANTO",
        "creation_date": "2026-08-22T23:09:19.029Z"
    }
]
```
##
### 2. Buscar Bairro por ID
Retorna os dados de um bairro específico.

- **Método:** `GET`
- **Endpoint:** `/neighborhoods/:id`
- **Path Params:**
  - `id` (number) - ID único do bairro

#### Resposta de Sucesso (`200 OK`)
```json
{
    "id": 1,
    "name": "CANTO",
    "creation_date": "2026-08-22T23:09:19.029Z"
}
```
##
### 3. Criar Bairro
Cadastra um novo bairro no sistema.

- **Método:** `POST`
- **Endpoint:** `/neighborhoods`
- **Body (JSON):**
```json
{
    "name": "Areias"
}
```
#### Resposta de sucesso ('201 Created')
```json
{
    "id": 10,
    "name": "Areias",
    "creation_date": "2026-08-25T22:39:29.162Z"
}
```
##
### 4. Atualizar Bairro
Atualiza um bairro específico no sistema.

- **Método:** `PATCH`
- **Endpoint:** `/neighborhoods/:id`
- **Path Params:**
  - `id` (number) - ID único do bairro
- **Body (JSON):**
```json
{
    "name": "AREIAS"
}
```
#### Resposta de sucesso ('200 OK')
```json
{
    "id": 10,
    "name": "AREIAS",
    "creation_date": "2026-08-25T22:39:29.162Z"
}
```
##
### 5. Deletar Bairro
Deleta um bairro específico no sistema.

- **Método:** `DELETE`
- **Endpoint:** `/neighborhoods/:id`
- **Path Params:**
  - `id` (number) - ID único do bairro

#### Resposta de sucesso ('200 OK')
```json
{
    "message": "Bairro deletado com sucesso"
}
```