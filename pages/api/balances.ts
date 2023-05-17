import { Transaction } from "@/types";
import { normalizeBalances } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";

const balancesService = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const query =
        "SELECT type, date, product_name AS productName, seller AS sellerName, amount, affected_user AS affectedUser FROM transactions";
      const transactions = (await db.query(query)) as Transaction[];
      const normalizedBalances = normalizeBalances(transactions);

      res.status(200).json(normalizedBalances);
    } catch (e) {
      res.status(400).json(e);
    }
  }
};

export default balancesService;
