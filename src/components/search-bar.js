import React from "react";
import { searchPokemon } from "../services/api-service";
const { useState } = React;

const SearchBar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div className="search-bar">
      <div className="search-bar-input">
        <input
          placeholder="Search for a pokemon..."
          onChange={onChange}
        ></input>
      </div>
      <div className="search-bar-btn">
        <button onClick={onClick}> Search </button>
      </div>
    </div>
  );
};

export default SearchBar;
