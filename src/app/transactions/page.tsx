"use client";
import Transactions from "@/components/Transactions";
import { getTransactions } from "@/services";
import { Transaction } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const UploadsPage = () => {
  const router = useRouter();
  const [allTransactions, setAllTransactions] = useState<Transaction[]>([]);

  const getAllTransactions = async () => {
    const result = await getTransactions();
    setAllTransactions(result.data);
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <main className="flex flex-col items-center ">
      <h1 className="text-2xl font-bold mt-5"> Transactions History</h1>
      <Transactions allTransactions={allTransactions} />
      <Link className="mt-4 cursor-pointer text-green hover:underline" href="/">
        Go back to home
      </Link>
    </main>
  );
};
export default UploadsPage;
