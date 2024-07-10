import { Arena } from "../modules/arena.js";
import { rollDice } from "../util/common.js";
import { expect } from "chai";

describe("Arena class", () => {
  let A;

  beforeEach(() => {
    A = new Arena();
  });

  describe("addPlayer method", () => {
    it("should not add player with negative or zero health, strength, or attack", () => {
      expect(A.addPlayer("A", -2, 200, 100)).to.equal(-1);
      expect(A.addPlayer("B", 100, -200, 100)).to.equal(-1);
      expect(A.addPlayer("C", 100, 200, -100)).to.equal(-1);
      expect(A.addPlayer("D", 0, 200, 100)).to.equal(-1);
    });

    it("should add player with valid attributes", () => {
      const id = A.addPlayer("A", 100, 200, 100);
      expect(A.isPresent(id)).to.be.true;
    });
  });

  describe("deletePlayer method", () => {
    it("should delete existing player", () => {
      const id = A.addPlayer("A", 100, 200, 100);
      A.deletePlayer(id);
      expect(A.isPresent(id)).to.be.false;
    });

    it("should not delete non-existent player", () => {
      A.addPlayer("A", 100, 200, 100);
      const countBefore = A.getPlayerCount();
      A.deletePlayer(123); // non-existent id
      expect(A.getPlayerCount()).to.equal(countBefore);
    });
  });

  describe("battle method", () => {
    it("should return empty object if players have the same id", () => {
      const id = A.addPlayer("A", 100, 200, 100);
      expect(A.battle(id, id)).to.deep.equal({});
    });

    it("should return empty object if either player does not exist", () => {
      const id = A.addPlayer("A", 100, 200, 100);
      expect(A.battle(id, 123)).to.deep.equal({});
      expect(A.battle(123, id)).to.deep.equal({});
    });

    it("should resolve battle between two players", () => {
      const id1 = A.addPlayer("A", 100, 200, 100);
      const id2 = A.addPlayer("B", 150, 180, 90);

      const result = A.battle(id1, id2);
      expect(result).to.have.property("winner").that.is.oneOf([id1, id2]);
      expect(result).to.have.property("loser").that.is.oneOf([id1, id2]);
    });
  });
});
