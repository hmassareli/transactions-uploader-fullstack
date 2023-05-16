import Uploads from "@/components/Uploads";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { transactionsMock } from "./mocks/mocks";

describe("Uploads component tests", () => {
  it("should render the expected information", () => {
    render(<Uploads transactions={transactionsMock} />);
    const appointmentsOnScreen = screen.queryAllByTestId("upload");
    expect(appointmentsOnScreen).toHaveLength(transactionsMock.length);
  });
});
