import React from "react";
import { useContext } from "react";
import FavoriteContext from "../contexts/favorites-context";
const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  let logoUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div />
      <div>
        <img src={logoUrl} alt="pokeApi-logo" className="navbar-image" />
      </div>

      <div>&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;
