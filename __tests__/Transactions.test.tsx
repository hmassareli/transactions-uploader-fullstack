import Transactions from "@/components/Transactions";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { transactionsMock } from "./mocks";

describe("Transactions component tests", () => {
  it("should render the expected information", () => {
    render(<Transactions allTransactions={transactionsMock} />);
    const appointmentsOnScreen = screen.queryAllByTestId("transaction");
    expect(appointmentsOnScreen).toHaveLength(transactionsMock.length);
  });
});
