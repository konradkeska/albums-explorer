import React from "react";
import { useHistory, useLocation } from "react-router";

import { setQueryParam } from "utils/helpers";

import eng from "lang/eng";

import "./Search.scss";

const Search: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

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
