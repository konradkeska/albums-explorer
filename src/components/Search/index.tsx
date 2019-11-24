import React, { useState } from "react";
import { useLocation } from "react-router";

import { useQueryParam } from "utils/hooks";

import eng from "lang/eng";

import "./Search.scss";

const Search: React.FC = () => {
  const { pathname } = useLocation();
  const [qParam] = useQueryParam("q");
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
    </form>
  );
};

export default Search;
