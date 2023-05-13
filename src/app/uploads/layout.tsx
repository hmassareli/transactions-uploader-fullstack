"use client";
import { TransactionsProvider } from "../../../context/context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TransactionsProvider>{children}</TransactionsProvider>;
}
