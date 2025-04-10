
# API de transações

Uma API Rest para criar, listar, visualizar e resumir transações realizadas por um usuario identificado com cookies.

### Desenvolvido para estudar:
- 💚🐈 Node & Fastify: Utilizados para lidar com as requisições HTTP da aplicação.
- 🐘 PostgreSQL: Utilizado para persistir os dados enviados pelo usuario.
- 🔼 PrismaORM: Utilizado para modelar e operar o banco de dados PostgreSQL.
- 🐋 Docker: Utilizado para criar um container com a aplicação e o banco de dados PostgreSQL para armazenar as transações.


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/pHenrymelo/transactions-API.git
```

Entre no diretório do projeto

```bash
  cd transactions-API
```

Instale as dependências

```bash
  pnpm install
```

Inicie o container do docker

```bash
  docker-compose up --build -d
```


## Apêndice

Resolvi desenvolver este projeto para estudar como eu poderia rodar minhas APIs no docker para que eu pudesse reutilizar em outros projetos futuros e também entender a dinamica para a criação do container da aplicação. Fui motivado por uma dificuldade em tentar acessar o banco de dados postgres rodando no docker no windows rodando a API no WSL. Geralmente alterno entre duas maquinas para desenvolver( uma Linux PoP.Os e outra windows com WSL Ubuntu ), e a melhor solução que encontrei para facilitar esse desenvolvimento alternado foi utilizando docker.

