import { rollDice } from "../util/common.js";
import { expect } from "chai";

describe("rollDice function", () => {
  it("should return a number between 1 and 6", () => {
    const result = rollDice();
    expect(result).to.be.within(1, 6);
  });

  it("should return an integer", () => {
    const result = rollDice();
    expect(result).to.satisfy(Number.isInteger);
  });
});
