import React from "react";
import { useHistory, useLocation } from "react-router";

import { setQueryParam } from "utils/helpers";

import PageNavButton from "./PaginationButton";

import eng from "lang/eng";

import "./Pagination.scss";

interface IProps {
  lastPage?: number;
  setLoading: (value: React.SetStateAction<boolean>) => void;
}

const Pagination: React.FC<IProps> = ({ setLoading, lastPage }) => {
  const history = useHistory();
  const location = useLocation();

  const currentUrlParams = new URLSearchParams(location.search);
  const pageParam = currentUrlParams.get("_page");
  const currentPage = pageParam ? Number(pageParam) : 1;

  const goToNextPage = () => {
    setLoading(true);
    setQueryParam("_page", (currentPage + 1).toString(), history);
  };

  const goToPrevPage = () => {
    setLoading(true);
    setQueryParam("_page", (currentPage - 1).toString(), history);
  };

  return (
    <nav className="page-nav">
      <PageNavButton
        label={eng.PREV}
        isActive={currentPage !== 1}
        disabled={currentPage === 1}
        onClick={goToPrevPage}
      />
      <p className="text-normal">
        {eng.PAGE} <span className="bold">{currentPage}</span>
      </p>
      <PageNavButton
        label={eng.NEXT}
        isActive={currentPage !== lastPage}
        disabled={currentPage === lastPage}
        onClick={goToNextPage}
      />
    </nav>
  );
};

export default Pagination;
