import { TransactionTypes } from "@/types";
import * as Yup from "yup";

const transactionSchema = Yup.object().shape<Yup.ObjectShape>({
  type: Yup.string().oneOf(Object.values(TransactionTypes)).required(),
  amount: Yup.number().required(),
  date: Yup.string().required(),
  productName: Yup.string().required(),
  sellerName: Yup.string().required(),
});
const transactionArraySchema = Yup.array().of(transactionSchema);

export default transactionArraySchema;
