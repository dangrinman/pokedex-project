import React from "react";

const Navbar = () => {
  let logoUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <img src={logoUrl} alt="pokeApi-logo" className="navbar-image" />
    </nav>
  );
};

export default Navbar;
