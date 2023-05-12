"use client";
import { postTransactions } from "@/services";
import { Transaction } from "@/types";
import { normalizeTransactions } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import documentIcon from "/public/assets/document-blue.svg";
const Home = () => {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDataReady, setIsDataReady] = useState(false);

  if (typeof window !== "undefined") {
    const reader = new window.FileReader();

    reader.onload = function (event) {
      if (!event.target) return;
      const fileContent = event.target.result;
      try {
        const transactionsArray = normalizeTransactions(fileContent as string);
        if (!transactionsArray) return;
        console.log(transactionsArray);
        setTransactions(transactionsArray);
        setIsDataReady(true);
      } catch (e) {
        setErrorMessage(`${e}`);
      }
    };

    const handleChange = (file: any) => {
      reader.readAsText(file);
      setErrorMessage("");
    };

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center justify-center gap-4">
          <FileUploader
            onTypeError={() => {
              setErrorMessage("Invalid file type, try again.");
            }}
            hoverTitle=" "
            dropMessageStyle={{
              backgroundColor: "#b7bbdd58",
            }}
            handleChange={handleChange}
            name="file"
            classes={""}
            types={["txt"]}
          >
            <div className=" flex justify-center rounded-2xl flex-col items-center dotted-spaced bg-[#b7bbdd39] w-[450px] h-[600px] ">
              <Image src={documentIcon} alt="" className="w-[80px]" />
              <p className="text-center text-3xl mt-4 mb-2 font-bold text-[#1944A0]">
                Submit Transactions
              </p>
              <p className="text-center text-xl max-w-sm">
                Upload or drag and drop a file
              </p>
            </div>
          </FileUploader>
          {isDataReady && transactions && (
            <>
              <p>Transactions received: {transactions?.length}</p>
              <p
                onClick={() => {
                  postTransactions(transactions);
                }}
                className="border border-green-500 cursor-pointer rounded-lg text-green-500 font-semibold bg-[#4dc76d2c] p-4"
              >
                Send your transactions
              </p>
            </>
          )}
          {errorMessage && (
            <p className="border border-red-500 rounded-lg max-w-[400px] text-red-500 font-semibold bg-[#c74d4d2d] p-4">
              {errorMessage}
            </p>
          )}
        </div>
      </main>
    );
  }
  return null;
};

export default Home;
