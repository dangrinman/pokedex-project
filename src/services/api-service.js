export const searchPokemon = async (search) => {
  let searchTerm = "https://pokeapi.co/api/v2/pokemon/" + search;
  try {
    const response = await fetch(searchTerm);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
};
