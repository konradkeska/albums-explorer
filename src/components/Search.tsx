import React from "react";
import { useLocation } from "react-router";

import eng from "lang/eng";

import "./Search.scss";

const Search: React.FC = () => {
  const location = useLocation();

  const currentUrlParams = new URLSearchParams(location.search);
  const qParam = currentUrlParams.get("q");

  const isPresent = !location.pathname.includes("albums/");

  return isPresent ? (
    <form className="search-form">
      <input
        className="search-form__input"
        type="search"
        name="q"
        placeholder={qParam || eng.SEARCH}
        autoFocus={true}
        disabled={location.pathname.includes("albums/")}
      />
    </form>
  ) : null;
};

export default Search;
