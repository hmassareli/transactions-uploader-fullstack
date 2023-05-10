"use client";
import Image from "next/image";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import documentIcon from "/public/assets/document-blue.svg";
export default function Home() {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const reader = new FileReader();

  reader.onload = function (event) {
    if (!event.target) return;
    const fileContent = event.target.result;
    console.log(fileContent); // this will log the text content of the file
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
          <p className="border border-red-500 rounded-lg text-red-500 font-semibold bg-[#c74d4d2d] p-4">
            {errorMessage}
          </p>
        )}
      </div>
    </main>
  );
}
