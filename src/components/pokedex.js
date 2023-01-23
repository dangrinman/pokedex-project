import React from "react";
import Pagination from "./pagination";
import Pokemon from "./pokemon";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  console.log("pokedex: ", pokemons);
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div> Loading pokemons...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name}></Pokemon>;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
