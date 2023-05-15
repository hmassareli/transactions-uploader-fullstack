import { fromCentsToDollars } from "@/utils";
import { describe, expect, it } from "@jest/globals";

describe("fromCentsToDollars", () => {
  it("should return the number in dollars", () => {
    const dollars = fromCentsToDollars(50000);
    expect(dollars).toEqual("500.00");
  });
});
