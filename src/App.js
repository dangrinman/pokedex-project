import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/nav-bar";
import Pokedex from "./components/pokedex";
import SearchBar from "./components/search-bar";
import { getPokemon, getPokemonByUrl } from "./services/api-service";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const initializePokedex = async () => {
    try {
      const data = await getPokemon();

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonByUrl(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (err) {}
  };

  useEffect(() => {
    initializePokedex();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
