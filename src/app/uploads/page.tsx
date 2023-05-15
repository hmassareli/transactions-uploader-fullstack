"use client";
import Uploads from "@/components/Uploads";
import { postTransactions } from "@/services";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { TransactionsContext } from "../../../context/context";

const UploadsPage = () => {
  const router = useRouter();
  const { transactions } = useContext(TransactionsContext);

  const handlePostTransactions = async () => {
    await postTransactions(transactions);
    router.push("/users");
  };

  useEffect(() => {
    if (transactions.length === 0) {
      router.push("/");
    }
  }, [router, transactions]);

  return (
    <main className="flex flex-col items-center ">
      <h1 className="text-2xl font-bold mt-5"> Check your Uploads</h1>
      <Uploads transactions={transactions} />
      <p
        onClick={handlePostTransactions}
        className="border mt-6 cursor-pointer rounded-lg text-white font-medium bg-[#158582] p-4"
      >
        Send transactions
      </p>
    </main>
  );
};
export default UploadsPage;
