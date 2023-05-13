import { Transaction } from "@/types";
import axios from "axios";

export type Balances = {
  [key: string]: {
    type: "affiliate" | "producer";
    balance: number;
  };
};
export type NormalizedBalance = {
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

export const getUserBalances = () => {
  return api.get<NormalizedBalance[]>("/balances");
};
