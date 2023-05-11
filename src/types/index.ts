export type Transaction = {
  type: TransactionTypes;
  amount: number;
  date: string;
  productName: string;
  sellerName: string;
};
export enum TransactionTypes {
  type1 = "producer_sell",
  type2 = "affiliate_sell",
  type3 = "commission_paid",
  type4 = "commission_received",
}
