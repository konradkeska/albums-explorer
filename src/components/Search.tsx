import React from "react";
import { useLocation } from "react-router";

import eng from "lang/eng";

import "./Search.scss";

const Search: React.FC = () => {
  const location = useLocation();

  const isPresent = !location.pathname.includes("albums/");

  return isPresent ? (
    <form className="search-form">
      <input
        className="search-form__input"
        type="search"
        name="q"
        placeholder={eng.SEARCH}
        autoFocus={true}
        disabled={location.pathname.includes("albums/")}
      />
    </form>
  ) : null;
};

export default Search;
