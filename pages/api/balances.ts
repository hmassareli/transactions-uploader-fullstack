import { Balances, NormalizedBalance } from "@/services";
import { Transaction } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";

const balancesService = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const transactions = (await db.query(
        "SELECT type, date, product_name AS productName, seller AS sellerName, amount, affected_user AS affectedUser FROM transactions"
      )) as Transaction[];

      const balances = transactions.reduce(
        (acc: Balances, curr: Transaction): Balances => {
          if (acc[curr.affectedUser]) {
            acc[curr.affectedUser].balance += curr.amount;
          } else {
            acc[curr.affectedUser] = {
              balance: curr.amount,
              type: "producer",
            };
          }
          if (curr.type === "affiliate_sell" && !acc[curr.sellerName]) {
            acc[curr.sellerName] = {
              type: "affiliate",
              balance: 0,
            };
          }
          return acc;
        },
        {}
      );
      const normalizedBalances = Object.entries(balances).reduce(
        (acc: NormalizedBalance[], [key, values]) => {
          return [...acc, { user: key, ...values }];
        },
        []
      );

      res.status(200).json(normalizedBalances);
    } catch (e) {
      res.status(400).json(e);
    }
  }
};

export default balancesService;
