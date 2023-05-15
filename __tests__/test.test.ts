import { describe, expect, it } from "@jest/globals";

describe("sum test", () => {
  it("should sum to numbers", () => {
    const a = 1,
      b = 2;
    const c = a + b;
    expect(c).toBe(3);
  });

  it("should sum to numbers wrong", () => {
    const c = 2;
    expect(c).toBe(3);
  });
});
