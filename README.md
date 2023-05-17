# transactions-uploader-fullstack


This is a NEXT.js project implementing both backend and frontend sides.  
The objetive is to handle uploads of a transactions list,
insert into a database, and show data related to users and transactions.

This project has a 100% coverage of unit tests, and as a plus, I implemented some end-to-end tests checking if the components are showing the transactions based on information provided in the props.  

You can see a live version hosted at vercel using a free db service on the link https://transactions-uploader-fullstack-hmassareli.vercel.app/



### Getting Started locally:
#### 1 - First, create an .env.local with the following information:

MYSQL_HOST= localhost  
MYSQL_PORT=3306  
MYSQL_DATABASE=transactions  
MYSQL_USER=root  
MYSQL_PASSWORD=  

#### 3 - start a MYSQL server 
You can use xampp or other app to run the mysql and apache server
Create a database called transactions
Import the mysql dump called "init.db" located on the root folder to create the table transactions

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
