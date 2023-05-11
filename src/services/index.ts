import { Transaction } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});
export const postTransactions = (data: Transaction[]) => {
  return api.post("/transactions", data);
};
