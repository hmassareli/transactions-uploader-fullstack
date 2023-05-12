import { Transaction } from "@/types";
import axios from "axios";

export type Balances = {
  [key: string]: {
    type: "affiliate" | "producer";
    balance: number;
  };
};
export type NormalizedBalances = {
  user: string;
  type: "affiliate" | "producer";
  balance: number;
};
const api = axios.create({
  baseURL: "/api",
});
export const postTransactions = (data: Transaction[]) => {
  return api.post("/transactions", data);
};
