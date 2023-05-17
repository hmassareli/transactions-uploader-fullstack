import { Transaction, TransactionTypes } from "@/types";
import moment from "moment";

export const normalizeTransactions = (txt: string): Transaction[] => {
  if (!txt) return [];
  const lines = txt.split("\n");
  return lines.reduce((acc: Transaction[], curr) => {
    if (!curr.trim()) return acc;
    const type =
      TransactionTypes[
        ("type" + curr.slice(0, 1)) as keyof typeof TransactionTypes
      ];
    const amount =
      type === TransactionTypes.type3
        ? -parseInt(curr.slice(56, 66))
        : parseInt(curr.slice(56, 66));

    const date = curr.slice(1, 26);
    const productName = curr.slice(26, 56).trim();
    const sellerName = curr.slice(66);
    let affectedUser = "";
    if (type !== TransactionTypes.type2) {
      affectedUser = sellerName;
    } else {
      const ownerLine = lines.findIndex(
        (line: string) =>
          line.slice(26, 56).trim() === productName && line.slice(0, 1) === "3"
      );
      if (ownerLine !== -1) {
        affectedUser = lines[ownerLine].slice(66);
      } else {
        throw new Error(
          "The file has a inconsistent format, there is an affiliate_sell without a line with the corresponding comission_paid to get the owner of that product"
        );
      }
    }
    const result = [
      ...acc,
      {
        amount,
        type,
        date,
        productName,
        sellerName,
        affectedUser,
      },
    ];

    return result;
  }, []);
};

export const fromCentsToDollars = (cents: number) => {
  return (cents / 100).toFixed(2);
};

export const formatDate = (formatString: string, date: string) => {
  return moment(date).format(formatString);
};
