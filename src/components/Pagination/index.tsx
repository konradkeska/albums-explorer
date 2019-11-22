import React from "react";
import { useHistory, useLocation } from "react-router";

import { setQueryParam } from "utils/helpers";

import eng from "lang/eng";

import "./Pagination.scss";

const Pagination: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const currentUrlParams = new URLSearchParams(location.search);
  const pageParam = currentUrlParams.get("_page");
  const currentPage = pageParam ? Number(pageParam) : 1;

  const goToNextPage = () =>
    setQueryParam("_page", (currentPage + 1).toString(), history);

  const goToPrevPage = () =>
    setQueryParam("_page", (currentPage - 1).toString(), history);

  return (
    <nav className="page-nav">
      <button
        disabled={currentPage === 1}
        onClick={goToPrevPage}
        className="page-nav__button page-nav__button"
      >
        {eng.PREV}
      </button>
      <p className="text-normal gray">
        {eng.PAGE} <span className="bold">{currentPage}</span>
      </p>
      <button
        onClick={goToNextPage}
        className="page-nav__button page-nav__button--active"
      >
        {eng.NEXT}
      </button>
    </nav>
  );
};

export default Pagination;
