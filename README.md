# transactions-uploader-fullstack


This is a NEXT.js project implementing both backend and frontend sides.  
The objetive is to handle uploads of a transactions list,
insert into a database, and show data related to users and transactions.


This project has a 100% coverage of unit tests, and as a plus, I implemented some end-to-end tests checking if the components are showing the transactions based on information provided in the props.  

You can see a live version hosted at vercel using a free db service on the link https://transactions-uploader-fullstack-hmassareli.vercel.app/

**To upload an example of transactions, use the sales.txt file in the root folder** 



### Getting Started locally:
#### 1 - First, create an .env.local with the following information:

Install the packages
```bash
npm install
```

MYSQL_HOST= localhost  
MYSQL_PORT=3306  
MYSQL_DATABASE=transactions  
MYSQL_USER=root  
MYSQL_PASSWORD=  

#### 3 - start a MYSQL server 
- **You can use xampp** or other app to run the mysql and apache server
- **Create a database** called transactions
- **Import the mysql dump** called "init.db" located on the root folder to create the table transactions

#### 3 - run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### How to run tests:
```bash
npm run test
```
- **To test the API requests**, you can use the postman collection "Transactions.postman_collection.json" on the root folder

### Getting Started on docker:
If you prefer running the app using Docker and Docker Compose, you can execute the following command:

```bash
docker-compose up --build
```
This command will build and run the Docker containers defined in the docker-compose.yml file, allowing you to run the app in a containerized environment.


## Descrição do projeto

Surgiu uma nova demanda urgente e precisamos de uma área exclusiva para fazer o
upload de um arquivo das transações feitas na venda de produtos por nossos
clientes.

Nossa plataforma trabalha no modelo criador-afiliado, sendo assim um criador
pode vender seus produtos e ter 1 ou mais afiliados também vendendo esses
produtos, desde que seja paga uma comissão por venda.

Uma transação financeira é um contrato de compra e venda. No contexto do
enunciado, vamos considerar que cada transação resulta na mudança do saldo,
podendo ser do produtor ou afiliado.

Sua tarefa é construir uma interface web que possibilite o upload de um arquivo
de transações de produtos vendidos, normalizar os dados e armazená-los em um
banco de dados relacional.

Você deve utilizar o arquivo [sales.txt](sales.txt) para fazer o teste da
aplicação. O formato esá descrito na seção "Formato do arquivo de entrada".

## Requisitos Funcionais

Sua aplicação deve:

1. Ter uma tela (via formulário) para fazer o upload do arquivo
2. Fazer o parsing do arquivo recebido, normalizar os dados e armazená-los em um
   banco de dados relacional, seguindo as definições de interpretação do arquivo
3. Exibir a lista de todas as transações de produtos importadas
4. Exibir o saldo final do produtor
5. Exibir o saldo final de um afiliado
6. Fazer tratamento de erros no backend, e reportar mensagens de erro amigáveis
   no frontend.

## Formato do arquivo de entrada

| Campo    | Início | Fim | Tamanho | Descrição                      |
| -------- | ------ | --- | ------- | ------------------------------ |
| Tipo     | 1      | 1   | 1       | Tipo da transação              |
| Data     | 2      | 26  | 25      | Data - ISO Date + GMT          |
| Produto  | 27     | 56  | 30      | Descrição do produto           |
| Valor    | 57     | 66  | 10      | Valor da transação em centavos |
| Vendedor | 67     | 86  | 20      | Nome do vendedor               |

### Tipos de transação

Esses são os valores possíveis para o campo Tipo:

| Tipo | Descrição         | Natureza | Sinal |
| ---- | ----------------- | -------- | ----- |
| 1    | Venda produtor    | Entrada  | +     |
| 2    | Venda afiliado    | Entrada  | +     |
| 3    | Comissão paga     | Saída    | -     |
| 4    | Comissão recebida | Entrada  | +     |

