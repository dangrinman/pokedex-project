import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/nav-bar";
import Pokedex from "./components/pokedex";
import SearchBar from "./components/search-bar";
import { getPokemon, getPokemonByUrl } from "./services/api-service";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const initializePokedex = async (limit = 50, offset = 0) => {
    try {
      setLoading(true);
      const data = await getPokemon(limit, offset);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonByUrl(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 50));
    } catch (err) {}
  };

  useEffect(() => {
    initializePokedex(50, 50 * page);
  }, [page]);

  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Pokedex
        loading={loading}
        total={total}
        page={page}
        setPage={setPage}
        pokemons={pokemons}
      />
    </div>
  );
}

export default App;
