# Manual de instalação

Clone o projeto `git clone git@github.com:JulioOLV/backend-challenge-node.git`

Entre no diretório do projeto e execute `npm install`

Suba o banco de dados com o seguinte comando `docker compose up`

Realize a execução das migrations executando o comando `npm run typeorm migration:run -- -d ./src/infrastructure/@shared/typeorm/dataSource.ts`

Execute a aplicação executando o comando `npm run start`

Acesso as APIs `http://localhost:3000/api/v1/(customers/orders/products)`

Acesso a documentação Swagger `http://localhost:3000/api`

Caso queira, para realizar os testes via Postman, você pode importar a coleção presente dentro do diretório do com o nome de `postman` e realizar alterações nos corpos das requisições para os dados que você deseja testar.
