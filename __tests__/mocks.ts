import { NormalizedBalance } from "@/services";
import { TransactionTypes } from "@/types";

export const transactionsMock = [
  {
    amount: 12750,
    type: TransactionTypes.type1,
    date: "2022-01-15T19:20:30-03:00",
    productName: "CURSO DE BEM-ESTAR",
    sellerName: "JOSE CARLOS",
    affectedUser: "JOSE CARLOS",
  },
  {
    amount: 50000,
    type: TransactionTypes.type1,
    date: "2021-12-03T11:46:02-03:00",
    productName: "DOMINANDO INVESTIMENTOS",
    sellerName: "MARIA CANDIDA",
    affectedUser: "MARIA CANDIDA",
  },
  {
    amount: 12750,
    type: TransactionTypes.type2,
    date: "2022-01-16T14:13:54-03:00",
    productName: "CURSO DE BEM-ESTAR",
    sellerName: "THIAGO OLIVEIRA",
    affectedUser: "JOSE CARLOS",
  },
  {
    amount: 4500,
    type: TransactionTypes.type4,
    date: "2022-01-16T14:13:54-03:00",
    productName: "CURSO DE BEM-ESTAR",
    sellerName: "THIAGO OLIVEIRA",
    affectedUser: "THIAGO OLIVEIRA",
  },
  {
    amount: -4500,
    type: TransactionTypes.type3,
    date: "2022-01-16T14:13:54-03:00",
    productName: "CURSO DE BEM-ESTAR",
    sellerName: "JOSE CARLOS",
    affectedUser: "JOSE CARLOS",
  },
  {
    amount: 50000,
    type: TransactionTypes.type1,
    date: "2022-01-22T08:59:13-03:00",
    productName: "DOMINANDO INVESTIMENTOS",
    sellerName: "MARIA CANDIDA",
    affectedUser: "MARIA CANDIDA",
  },
  {
    amount: 155000,
    type: TransactionTypes.type1,
    date: "2022-02-01T23:35:43-03:00",
    productName: "DESENVOLVEDOR FULL STACK",
    sellerName: "ELIANA NOGUEIRA",
    affectedUser: "ELIANA NOGUEIRA",
  },
  {
    amount: 155000,
    type: TransactionTypes.type2,
    date: "2022-02-03T17:23:37-03:00",
    productName: "DESENVOLVEDOR FULL STACK",
    sellerName: "CARLOS BATISTA",
    affectedUser: "ELIANA NOGUEIRA",
  },
  {
    amount: 155000,
    type: TransactionTypes.type2,
    date: "2022-02-03T20:51:59-03:00",
    productName: "DESENVOLVEDOR FULL STACK",
    sellerName: "CAROLINA MACHADO",
    affectedUser: "ELIANA NOGUEIRA",
  },
  {
    amount: 155000,
    type: TransactionTypes.type2,
    date: "2022-02-04T07:42:12-03:00",
    productName: "DESENVOLVEDOR FULL STACK",
    sellerName: "CELSO DE MELO",
    affectedUser: "ELIANA NOGUEIRA",
  },
  {
    amount: 50000,
    type: TransactionTypes.type4,
    date: "2022-02-03T17:23:37-03:00",
    productName: "DESENVOLVEDOR FULL STACK",
    sellerName: "CARLOS BATISTA",
    affectedUser: "CARLOS BATISTA",
  },
  {
    amount: 50000,
    type: TransactionTypes.type4,
    date: "2022-02-03T20:51:59-03:00",
    productName: "DESENVOLVEDOR FULL STACK",
    sellerName: "CAROLINA MACHADO",
    affectedUser: "CAROLINA MACHADO",
  },
  {
    amount: 50000,
    type: TransactionTypes.type4,
    date: "2022-02-04T07:42:12-03:00",
    productName: "DESENVOLVEDOR FULL STACK",
    sellerName: "CELSO DE MELO",
    affectedUser: "CELSO DE MELO",
  },
  {
    amount: -50000,
    type: TransactionTypes.type3,
    date: "2022-02-03T17:23:37-03:00",
    productName: "DESENVOLVEDOR FULL STACK",
    sellerName: "ELIANA NOGUEIRA",
    affectedUser: "ELIANA NOGUEIRA",
  },
  {
    amount: -50000,
    type: TransactionTypes.type3,
    date: "2022-02-03T20:51:59-03:00",
    productName: "DESENVOLVEDOR FULL STACK",
    sellerName: "ELIANA NOGUEIRA",
    affectedUser: "ELIANA NOGUEIRA",
  },
  {
    amount: -50000,
    type: TransactionTypes.type3,
    date: "2022-02-04T07:42:12-03:00",
    productName: "DESENVOLVEDOR FULL STACK",
    sellerName: "ELIANA NOGUEIRA",
    affectedUser: "ELIANA NOGUEIRA",
  },
  {
    amount: 50000,
    type: TransactionTypes.type1,
    date: "2022-02-19T05:33:07-03:00",
    productName: "DOMINANDO INVESTIMENTOS",
    sellerName: "MARIA CANDIDA",
    affectedUser: "MARIA CANDIDA",
  },
  {
    amount: 12750,
    type: TransactionTypes.type1,
    date: "2022-03-01T02:09:54-03:00",
    productName: "CURSO DE BEM-ESTAR",
    sellerName: "JOSE CARLOS",
    affectedUser: "JOSE CARLOS",
  },
  {
    amount: 155000,
    type: TransactionTypes.type1,
    date: "2022-03-03T09:07:35-03:00",
    productName: "DESENVOLVEDOR FULL STACK",
    sellerName: "ELIANA NOGUEIRA",
    affectedUser: "ELIANA NOGUEIRA",
  },
  {
    amount: 155000,
    type: TransactionTypes.type1,
    date: "2022-03-03T13:12:16-03:00",
    productName: "DESENVOLVEDOR FULL STACK",
    sellerName: "ELIANA NOGUEIRA",
    affectedUser: "ELIANA NOGUEIRA",
  },
];

export const usersMock: NormalizedBalance[] = [
  { user: "JOSE CARLOS", balance: 67500, type: "producer" },
  { user: "MARIA CANDIDA", balance: 300000, type: "producer" },
  { user: "THIAGO OLIVEIRA", type: "affiliate", balance: 9000 },
  { user: "ELIANA NOGUEIRA", balance: 1560000, type: "producer" },
  { user: "CARLOS BATISTA", type: "affiliate", balance: 100000 },
  { user: "CAROLINA MACHADO", type: "affiliate", balance: 100000 },
  { user: "CELSO DE MELO", type: "affiliate", balance: 100000 },
];

export const transactionsFileMock = `12022-01-15T19:20:30-03:00CURSO DE BEM-ESTAR            0000012750JOSE CARLOS
12021-12-03T11:46:02-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA
22022-01-16T14:13:54-03:00CURSO DE BEM-ESTAR            0000012750THIAGO OLIVEIRA
42022-01-16T14:13:54-03:00CURSO DE BEM-ESTAR            0000004500THIAGO OLIVEIRA
32022-01-16T14:13:54-03:00CURSO DE BEM-ESTAR            0000004500JOSE CARLOS
12022-01-22T08:59:13-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA
12022-02-01T23:35:43-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA
22022-02-03T17:23:37-03:00DESENVOLVEDOR FULL STACK      0000155000CARLOS BATISTA
22022-02-03T20:51:59-03:00DESENVOLVEDOR FULL STACK      0000155000CAROLINA MACHADO
22022-02-04T07:42:12-03:00DESENVOLVEDOR FULL STACK      0000155000CELSO DE MELO
42022-02-03T17:23:37-03:00DESENVOLVEDOR FULL STACK      0000050000CARLOS BATISTA
42022-02-03T20:51:59-03:00DESENVOLVEDOR FULL STACK      0000050000CAROLINA MACHADO
42022-02-04T07:42:12-03:00DESENVOLVEDOR FULL STACK      0000050000CELSO DE MELO
32022-02-03T17:23:37-03:00DESENVOLVEDOR FULL STACK      0000050000ELIANA NOGUEIRA
32022-02-03T20:51:59-03:00DESENVOLVEDOR FULL STACK      0000050000ELIANA NOGUEIRA
32022-02-04T07:42:12-03:00DESENVOLVEDOR FULL STACK      0000050000ELIANA NOGUEIRA
12022-02-19T05:33:07-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA
12022-03-01T02:09:54-03:00CURSO DE BEM-ESTAR            0000012750JOSE CARLOS
12022-03-03T09:07:35-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA
12022-03-03T13:12:16-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA
`;

export const normalizedTransactionsMock = `[{"amount":12750,"type":"producer_sell","date":"2022-01-15T19:20:30-03:00","productName":"CURSO DE BEM-ESTAR","sellerName":"JOSE CARLOS","affectedUser":"JOSE CARLOS"},{"amount":50000,"type":"producer_sell","date":"2021-12-03T11:46:02-03:00","productName":"DOMINANDO INVESTIMENTOS","sellerName":"MARIA CANDIDA","affectedUser":"MARIA CANDIDA"},{"amount":12750,"type":"affiliate_sell","date":"2022-01-16T14:13:54-03:00","productName":"CURSO DE BEM-ESTAR","sellerName":"THIAGO OLIVEIRA","affectedUser":"JOSE CARLOS"},{"amount":4500,"type":"commission_received","date":"2022-01-16T14:13:54-03:00","productName":"CURSO DE BEM-ESTAR","sellerName":"THIAGO OLIVEIRA","affectedUser":"THIAGO OLIVEIRA"},{"amount":-4500,"type":"commission_paid","date":"2022-01-16T14:13:54-03:00","productName":"CURSO DE BEM-ESTAR","sellerName":"JOSE CARLOS","affectedUser":"JOSE CARLOS"},{"amount":50000,"type":"producer_sell","date":"2022-01-22T08:59:13-03:00","productName":"DOMINANDO INVESTIMENTOS","sellerName":"MARIA CANDIDA","affectedUser":"MARIA CANDIDA"},{"amount":155000,"type":"producer_sell","date":"2022-02-01T23:35:43-03:00","productName":"DESENVOLVEDOR FULL STACK","sellerName":"ELIANA NOGUEIRA","affectedUser":"ELIANA NOGUEIRA"},{"amount":155000,"type":"affiliate_sell","date":"2022-02-03T17:23:37-03:00","productName":"DESENVOLVEDOR FULL STACK","sellerName":"CARLOS BATISTA","affectedUser":"ELIANA NOGUEIRA"},{"amount":155000,"type":"affiliate_sell","date":"2022-02-03T20:51:59-03:00","productName":"DESENVOLVEDOR FULL STACK","sellerName":"CAROLINA MACHADO","affectedUser":"ELIANA NOGUEIRA"},{"amount":155000,"type":"affiliate_sell","date":"2022-02-04T07:42:12-03:00","productName":"DESENVOLVEDOR FULL STACK","sellerName":"CELSO DE MELO","affectedUser":"ELIANA NOGUEIRA"},{"amount":50000,"type":"commission_received","date":"2022-02-03T17:23:37-03:00","productName":"DESENVOLVEDOR FULL STACK","sellerName":"CARLOS BATISTA","affectedUser":"CARLOS BATISTA"},{"amount":50000,"type":"commission_received","date":"2022-02-03T20:51:59-03:00","productName":"DESENVOLVEDOR FULL STACK","sellerName":"CAROLINA MACHADO","affectedUser":"CAROLINA MACHADO"},{"amount":50000,"type":"commission_received","date":"2022-02-04T07:42:12-03:00","productName":"DESENVOLVEDOR FULL STACK","sellerName":"CELSO DE MELO","affectedUser":"CELSO DE MELO"},{"amount":-50000,"type":"commission_paid","date":"2022-02-03T17:23:37-03:00","productName":"DESENVOLVEDOR FULL STACK","sellerName":"ELIANA NOGUEIRA","affectedUser":"ELIANA NOGUEIRA"},{"amount":-50000,"type":"commission_paid","date":"2022-02-03T20:51:59-03:00","productName":"DESENVOLVEDOR FULL STACK","sellerName":"ELIANA NOGUEIRA","affectedUser":"ELIANA NOGUEIRA"},{"amount":-50000,"type":"commission_paid","date":"2022-02-04T07:42:12-03:00","productName":"DESENVOLVEDOR FULL STACK","sellerName":"ELIANA NOGUEIRA","affectedUser":"ELIANA NOGUEIRA"},{"amount":50000,"type":"producer_sell","date":"2022-02-19T05:33:07-03:00","productName":"DOMINANDO INVESTIMENTOS","sellerName":"MARIA CANDIDA","affectedUser":"MARIA CANDIDA"},{"amount":12750,"type":"producer_sell","date":"2022-03-01T02:09:54-03:00","productName":"CURSO DE BEM-ESTAR","sellerName":"JOSE CARLOS","affectedUser":"JOSE CARLOS"},{"amount":155000,"type":"producer_sell","date":"2022-03-03T09:07:35-03:00","productName":"DESENVOLVEDOR FULL STACK","sellerName":"ELIANA NOGUEIRA","affectedUser":"ELIANA NOGUEIRA"},{"amount":155000,"type":"producer_sell","date":"2022-03-03T13:12:16-03:00","productName":"DESENVOLVEDOR FULL STACK","sellerName":"ELIANA NOGUEIRA","affectedUser":"ELIANA NOGUEIRA"}]`;
