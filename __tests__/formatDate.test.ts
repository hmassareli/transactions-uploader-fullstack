import { formatDate } from "@/utils";
import { describe, expect, it } from "@jest/globals";

describe("fromCentsToDollars", () => {
  it("should return the number in dollars", () => {
    const dateResult = formatDate("YYYY-MM-DD", "2022-01-15T19:20:30-03:00");
    expect(dateResult).toEqual("2022-01-15");
  });
});
