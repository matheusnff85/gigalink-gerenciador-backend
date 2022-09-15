# Backend gerenciador de vendas

Neste repositório contém o backend da aplicação pedida, desenvolvido por [Matheus Marinho](https://www.linkedin.com/in/matheus-marinhodsp/), uma API feita em **node.js**, com um banco de dados **MYSQL** utilizando a arquitetura **MSC** feito com **Sequelize**, e utilizando **Joi** para validar os dados recebidos da requisição e tratar os eventuais erros de tipo.


## Estrutura do banco de dados

O banco foi feito seguindo o diagrama pedido e se estrutura da seguinte forma ilustrada na imagem abaixo:
<img src="images/estrutura.png">

## Importante

- Para iniciar o serviço de backend é necessário que você configure as variaveis de ambiente conditas no projeto, mude as para as de sua preferencia, você pode localiza-las no arquivo **.env.example** sinta-se livre para alterar o valor delas porém mantenha o nome da chave, após alterar para os dados que deseja mude o nome do arquivo para somente **.env**.

```
#### DATABASE VARS
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=gigalink_db
MYSQL_USER=root
MYSQL_PASSWORD=1234

#### SERVER VARS
API_PORT=3001
```

- O arquivo **.sequelizerc** é responsável por mapear os diretórios utilizados no sequelize, caso mude o nome de algum arquivo/diretório altere tambem no **.sequelizerc**.

- Para executar a API basta garantir que tem um serviço de MySQL online e devidamente configurado no arquivo **.env**, caso utilize o docker você pode iniciar um container MySQL com o comando abaixo:
```bash
docker container run --name database -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 -d mysql:5.7
```

- Após isso é só clonar o repositório com o comando `git clone git@github.com:matheusnff85/gigalink-gerenciador-backend.git`, e instalar suas dependencias com o comando `npm install` na raiz do diretório e seguindo para deixar a API online utilize os comandos `npm start` ou `npm run debug`, se tudo deu certo você verá no terminal a mensagem: `Server is running on PORT: "Porta definida no .env"`.