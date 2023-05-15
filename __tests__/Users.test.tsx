import Users from "@/components/Users";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { usersMock } from "./mocks";

describe("Users component tests", () => {
  it("should render the expected information", () => {
    render(<Users users={usersMock} />);
    const appointmentsOnScreen = screen.queryAllByTestId("user");
    expect(appointmentsOnScreen).toHaveLength(usersMock.length);
  });
});
