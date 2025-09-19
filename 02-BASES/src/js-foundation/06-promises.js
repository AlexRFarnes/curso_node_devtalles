export const getPokemonById = id => {
  let data;
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokemon => {
      console.log(pokemon.name);
    });
};
