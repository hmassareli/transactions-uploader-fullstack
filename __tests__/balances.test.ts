import { normalizeBalances } from "@/utils";
import { describe, it } from "@jest/globals";
import { transactionsMock } from "./mocks/mocks";

describe("normalizeBalances", () => {
  it("should return an array of normalizesBalances", () => {
    const normalized = normalizeBalances(transactionsMock);
    //check if normalized is of type NormalizedBalance
    expect(JSON.stringify(normalized)).toEqual(
      `[{"user":"JOSE CARLOS","balance":33750,"type":"producer"},{"user":"MARIA CANDIDA","balance":150000,"type":"producer"},{"user":"THIAGO OLIVEIRA","type":"affiliate","balance":4500},{"user":"ELIANA NOGUEIRA","balance":780000,"type":"producer"},{"user":"CARLOS BATISTA","type":"affiliate","balance":50000},{"user":"CAROLINA MACHADO","type":"affiliate","balance":50000},{"user":"CELSO DE MELO","type":"affiliate","balance":50000}]`
    );
  });
});
