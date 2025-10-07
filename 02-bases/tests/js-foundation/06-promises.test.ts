import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("js-foundation/06-promises.ts", () => {
  it("should return a pokemon name", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);

    expect(pokemonName).toBe("bulbasaur");
  });

  it("should return an error if the pokemon does not exist", async () => {
    const pokemonId = 1000000000;
    try {
      const pokemonName = await getPokemonById(pokemonId);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
