# Todo Tasks Api

Back-end de um aplicativo simples de gerenciamento de tarefas, trata-se de um projeto de estudo para adquirir conhecimentos sobre desenvolvimento back-end.

## Instalar e rodar o projeto

Rodar o Todo Tasks em sua máquina local é uma tarefa extremamente simples.

### Dependências globais

Você precisa ter duas principais dependências instaladas:

 - Bun runtime v1.1.10 (ou qualquer versão superior)
 - Docker Engine v26.1.3 com Docker Compose v2.27.0 (ou qualquer versão superior)

### Dependências locais

Com o repositório clonado e as dependências globais instaladas, você pode instalar as dependências locais do projeto:

```sh
 bun install
```

### Rodar o projeto

Para rodar o projeto localmente, basta executar o comando abaixo:

```sh
 bun dev
``` 

Isto irá automaticamente rodar serviços como Banco de dados (incluindo as Migrations), Servidor desenvolvimento seguinte endereço:

```sh
 http://localhost:3000/ 
 http://localhost:3000/api/v1/tasks
```

Apos este passo executar a semente para preencher o banco de dados com dados falsos.

```sh
 bun seed
```

### Documentação API (Swagger)

para acessarr a documentaçção da API, vá para:

```sh
http://localhost:3000/api/v1/tasks/docs
```

## Features

 - Cadastrar uma nova tarefa
 - Atualizar o status de uma tarefa 
 - Obter detalhes de uma tarefa
 - Atualizar uma tarefa
 - Obter todas as tarefas
 - Deletar uma tarefa