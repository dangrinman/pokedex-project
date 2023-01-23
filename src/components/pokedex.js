import React from "react";
import Pokemon from "./pokemon";

const Pokedex = (props) => {
  const { pokemons } = props;
  console.log("pokedex: ", pokemons);
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Pagination</div>
      </div>
      <div className="pokedex-grid">
        {pokemons.map((pokemon, idx) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name}></Pokemon>;
        })}
      </div>
    </div>
  );
};

export default Pokedex;
