
# Guia de Execução da API

Este documento fornece as instruções para rodar sua API localmente.

### 1. Rodar as migrações do banco de dados
Na primeira vez que for subir a API, é necessário rodar as migrações para configurar o banco de dados corretamente. Execute o seguinte comando:

```bash
npm run knex:migrate:latest
```

### 2. Iniciar a API no ambiente de desenvolvimento
Após rodar as migrações, você pode iniciar a API em modo de desenvolvimento com o comando:

```bash
npm run start:dev
```

Este comando irá iniciar o servidor no modo de desenvolvimento e ele ficará observando as mudanças nos arquivos, recarregando automaticamente.

### 3. Como reiniciar a API
Caso a API pare ou você precise reiniciá-la, basta rodar novamente o comando abaixo (não é necessário rodar as migrações novamente):

```bash
npm run start:dev
```

### 4. Verificação de execução
Após rodar o comando `npm run start:dev`, a API deve estar rodando localmente. Você pode verificar isso acessando o endpoint da API no seu navegador ou usando ferramentas como o Postman ou Insomnia.
