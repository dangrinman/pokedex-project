import React from "react";
import { useContext } from "react";
import FavoriteContext from "../contexts/favorites-context";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const redHeart = "❤️";
  const blackheart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackheart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };
  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="pokemon-card-body">
        <div className="pokemon-card-top">
          <h3>{pokemon.name}</h3>
          <div> #{pokemon.id}</div>
        </div>
        <div className="pokemon-card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div className="pokemon-type-text" key={idx}>
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart}>
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
