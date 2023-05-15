import { normalizeTransactions } from "@/utils";
import { describe, expect, it } from "@jest/globals";
import { normalizedTransactionsMock, transactionsFileMock } from "./mocks";

describe("normalizedTransactionsMock", () => {
  it("should return the expected normalized array", () => {
    const normalizedTransactions = normalizeTransactions(transactionsFileMock);
    expect(JSON.stringify(normalizedTransactions)).toEqual(
      normalizedTransactionsMock
    );
  });
});
