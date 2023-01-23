export const searchPokemon = async (search) => {
  try {
    let searchTerm = `https://pokeapi.co/api/v2/pokemon/${search}`;
    const response = await fetch(searchTerm);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
};

export const getPokemon = async (limit = 10, offset = 0) => {
  try {
    let searchTerm = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    const response = await fetch(searchTerm);
    const data = await response.json();

    return data;
  } catch (err) {
    console.warn(err);
  }
};

export const getPokemonByUrl = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
};
