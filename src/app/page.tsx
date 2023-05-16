"use client";
import { normalizeTransactions } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { TransactionsContext } from "../../context/context";
import documentIcon from "/public/assets/document-blue.svg";
const Home = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { transactions, setTransactions } = useContext(TransactionsContext);
  const [hasUploaded, setHasUploaded] = useState(false);
  let reader: FileReader | null = null;
  const router = useRouter();

  useEffect(() => {
    reader = new window.FileReader();
    reader.onload = function (event) {
      if (!event.target) return;
      const fileContent = event.target.result;
      try {
        const transactionsArray = normalizeTransactions(fileContent as string);
        if (!transactionsArray) return;
        setHasUploaded(true);
        setTransactions(transactionsArray);
      } catch (e) {
        setErrorMessage(`${e}`);
      }
    };
  }, []);

  useEffect(() => {
    if (transactions.length !== 0 && hasUploaded) {
      router.push("/uploads");
    }
  }, [transactions, router, hasUploaded]);

  const handleChange = (file: any) => {
    reader!.readAsText(file);
    setErrorMessage("");
  };

  return (
    <main className="flex flex-col items-center justify-between px-24 pt-10">
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
        {errorMessage && (
          <p className="border border-red-500 rounded-lg max-w-[400px] text-red-500 font-semibold bg-[#c74d4d2d] p-4">
            {errorMessage}
          </p>
        )}
      </div>
    </main>
  );
};

export default Home;
