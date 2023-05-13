"use client";
import { Transaction } from "@/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface TransactionsContextType {
  transactions: Transaction[];
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
}

export const TransactionsContext = createContext<TransactionsContextType>({
  transactions: [],
  setTransactions: () => {},
});

export const TransactionsProvider = ({ children }: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
