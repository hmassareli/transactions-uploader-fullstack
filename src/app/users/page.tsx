"use client";
import { NormalizedBalance, getUserBalances } from "@/services";
import { fromCentsToDollars } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UploadsPage = () => {
  const router = useRouter();
  const [users, setUsers] = useState<NormalizedBalance[] | []>([]);

  const getUsers = async () => {
    const users = await getUserBalances();
    setUsers(users.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1 className="text-2xl font-bold mt-5"> Balance</h1>
      <div className=" h-full mt-7 max-h-[700px] overflow-auto scroll w-full max-w-4xl rounded-b-lg">
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex gap-2 px-8 rounded-t-lg w-full justify-between font-bold bg-[#1944A0] text-white py-3">
            <p className="w-[200px] ">User</p>
            <p className="w-[250px]">Type</p>
            <p className="w-[100px] ">Balance</p>
          </div>
        </div>
        <div className="bg-[#b7bbdd39]  flex flex-col items-center justify-center w-full max-w-5xl ">
          {users.map((user: NormalizedBalance, index: number) => (
            <div
              className="odd:bg-[#b7bbdd3a] flex py-3 gap-2 px-8 w-full justify-between font-bold text-sm"
              key={index}
            >
              <p className="w-[200px] text-[#1944A0]">{user.user}</p>
              <p className="w-[250px] text-[#1944A0]">{user.type}</p>
              <p className="w-[100px] text-[#1944A0]">
                {fromCentsToDollars(user.balance)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link className="mt-4 cursor-pointer text-green hover:underline" href="/">
        Go back to home
      </Link>
    </main>
  );
};
export default UploadsPage;
