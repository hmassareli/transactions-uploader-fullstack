"use client";
import { Transaction } from "@/types";
import { useContext } from "react";
import { TransactionsContext } from "../../../context/context";

const UploadsPage = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-28">
      <div className="flex flex-col items-center justify-center gap-4 w-full max-w-5xl">
        <div className="flex gap-2 px-8 rounded-t-lg w-full justify-between font-bold bg-[#1944A0] text-white py-3">
          <p className="w-[200px] ">Seller</p>
          <p className="w-[250px] ">Product</p>
          <p className="w-[100px] ">Amount</p>
          <p className="w-[170px] ">Type</p>
        </div>
      </div>
      <div className="bg-[#b7bbdd39] rounded-b-lg flex flex-col items-center justify-center w-full max-w-5xl ">
        {transactions.map((transaction: Transaction, index: number) => (
          <div
            className="odd:bg-[#b7bbdd3a] flex py-3 gap-2 px-8 w-full justify-between font-bold text-sm"
            key={index}
          >
            <p className="w-[200px] text-[#1944A0]">{transaction.sellerName}</p>
            <p className="w-[250px] text-[#1944A0]">
              {transaction.productName}
            </p>
            <p className="w-[100px] text-[#1944A0]">{transaction.amount}</p>
            <p className="w-[170px] text-[#1944A0]">{transaction.type}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
export default UploadsPage;
