import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";

const transactionsService = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    console.log(req.body);
    const tx = db.transaction();
    for (const i of req.body) {
      tx.query(
        "INSERT INTO transactions(type, date, product_name, seller, amount, affected_user ) VALUES(?, ?, ?, ?, ?, ?)",
        [i.type, i.date, i.productName, i.sellerName, i.amount, i.affectedUser]
      );
    }
    try {
      const result = await tx
        .rollback((e: any) => {
          console.log(e);
        })
        .commit();
      res.status(200).json(req.body);
    } catch (e) {
      res.status(400).json(e);
    }
  }
};

export default transactionsService;
