import React from "react";
import { searchPokemon } from "../services/api-service";
const { useState } = React;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  const onSearchPokemon = async () => {
    const data = await searchPokemon(search);
    console.log(data);
    setPokemon(data);
  };

  return (
    <div className="search-bar">
      <div>
        <input placeholder="Search for a pokemon" onChange={onChange}></input>
      </div>
      <div className="search-bar-btn">
        <button onClick={onSearchPokemon}> Search </button>
      </div>
    </div>
  );
};

export default SearchBar;
