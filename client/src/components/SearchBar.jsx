import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../redux/actions";
import '../styles/searchbar.css'

function SearchBar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesByName(input));
  }, [input, dispatch]);

  return (
    <div className="searchbar">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="searchbarInput"
          type="text"
          placeholder="Search countries by name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
