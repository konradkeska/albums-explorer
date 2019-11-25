import React, { useState } from "react";
import { useLocation } from "react-router";

import { useQueryParam } from "utils/hooks";

import eng from "lang/eng";

import "./Search.scss";

const Search: React.FC = () => {
  const { pathname } = useLocation();
  const [qParam] = useQueryParam("q");
  const [limitParam] = useQueryParam("_limit");
  const [query, setQuery] = useState(qParam || "");

  if (pathname !== "/") {
    return null;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.currentTarget.value);

  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="search"
        name="q"
        value={query as string}
        onChange={onChange}
        placeholder={eng.SEARCH}
        autoFocus={true}
      />
      <input type="hidden" name="_page" value="1" />
      <input type="hidden" name="_limit" value={limitParam as string} />
    </form>
  );
};

export default Search;
