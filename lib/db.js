// db.js
import mysql from "serverless-mysql";
const config = {
  host: process.env.NEXT_PUBLIC_MYSQL_HOST,
  port: process.env.NEXT_PUBLIC_MYSQL_PORT,
  database: process.env.NEXT_PUBLIC_MYSQL_DATABASE,
  user: process.env.NEXT_PUBLIC_MYSQL_USER,
  password: process.env.NEXT_PUBLIC_MYSQL_PASSWORD,
};
console.log(config);
export const db = mysql({
  config: config,
});
