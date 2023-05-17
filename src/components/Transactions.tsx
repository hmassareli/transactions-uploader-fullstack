import { Transaction } from "@/types";
import { formatDate, fromCentsToDollars } from "@/utils";

const Transactions = ({
  allTransactions,
}: {
  allTransactions: Transaction[];
}) => {
  return (
    <div className=" h-full mt-7 max-h-[600px] overflow-auto scroll w-full max-w-4xl rounded-b-lg">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <div className="flex gap-2 px-8 rounded-t-lg w-full justify-between font-bold bg-[#1944A0] text-white py-3">
          <p className="w-[200px] ">Date</p>
          <p className="w-[200px] ">Seller</p>
          <p className="w-[250px] ">Product</p>
          <p className="w-[100px] ">Amount</p>
          <p className="w-[170px] ">Type</p>
        </div>
      </div>
      <div className="bg-[#b7bbdd39]  flex flex-col items-center justify-center w-full max-w-5xl ">
        {allTransactions.map((transaction: Transaction, index: number) => (
          <div
            data-testid="transaction"
            className="odd:bg-[#b7bbdd3a] flex py-3 gap-2 px-8 w-full justify-between font-bold text-sm"
            key={index}
          >
            <p className="w-[200px] text-[#1944A0]">
              {" "}
              {formatDate("YYYY-MM-DD", transaction.date)}
            </p>
            <p className="w-[200px] text-[#1944A0]">{transaction.sellerName}</p>
            <p className="w-[250px] text-[#1944A0]">
              {transaction.productName}
            </p>
            <p className="w-[100px] text-[#1944A0]">
              {fromCentsToDollars(transaction.amount)}
            </p>
            <p className="w-[170px] text-[#1944A0]">{transaction.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
