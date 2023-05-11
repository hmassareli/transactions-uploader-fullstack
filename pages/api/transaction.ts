import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";

const GetTransactions = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const tx = db.transaction();
    for (const i of req.body) {
      tx.query(
        "INSERT INTO transactions(type, date, product_name, seller, amount ) VALUES(?, ?, ?, ?, ?)",
        [i.type, i.date, i.productName, i.sellerName, i.amount]
      );
    }
    const result = tx
      .rollback((e: any) => {
        console.log(e);
      })
      .commit()
      .then((data) => {
        res.status(200).json(data);
      });
    console.log(result);
  }
};

export default GetTransactions;
