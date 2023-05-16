"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TransactionsProvider } from "../../context/context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransactionsProvider>
          <div className="flex justify-evenly font-bold items-center rounded-lg w-[400px] h-11 m-auto mt-5 gap-3 text-[#1944A0]">
            <Link
              className={
                pathName === "/"
                  ? "underline underline-offset-4 decoration-2"
                  : ""
              }
              href="/"
            >
              Home
            </Link>
            <Link
              className={
                pathName === "/transactions"
                  ? "underline underline-offset-4 decoration-2"
                  : ""
              }
              href="/transactions"
            >
              Transactions
            </Link>
            <Link
              className={
                pathName === "/users"
                  ? "underline underline-offset-4 decoration-2"
                  : ""
              }
              href="/users"
            >
              Users
            </Link>
          </div>
          {children}
        </TransactionsProvider>
      </body>
    </html>
  );
}
