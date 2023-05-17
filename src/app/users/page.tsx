"use client";
import Users from "@/components/Users";
import { NormalizedBalance, getUserBalances } from "@/services";
import Link from "next/link";
import { useEffect, useState } from "react";

const UploadsPage = () => {
  const [users, setUsers] = useState<NormalizedBalance[] | []>([]);

  const getUsers = async () => {
    const users = await getUserBalances();
    setUsers(users.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main className="flex flex-col items-center ">
      <h1 className="text-2xl font-bold mt-5"> Balance</h1>
      <Users users={users} />
      <Link className="mt-4 cursor-pointer text-green hover:underline" href="/">
        Go back to home
      </Link>
    </main>
  );
};
export default UploadsPage;
