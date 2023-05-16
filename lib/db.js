// db.js
import mysql from "serverless-mysql";
export const db = mysql({
  config: {
    host: "db",
    port: 3306,
    database: "transactions",
    user: "user",
    password: "pass",
  },
});
