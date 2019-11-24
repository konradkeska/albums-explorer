import React from "react";
import { useHistory, useLocation } from "react-router";

import { setQueryParam } from "utils/helpers";

import NavButton from "../NavButton";

import eng from "lang/eng";

import "./Pagination.scss";

interface IProps {
  lastPage?: number;
  setLoading?: (value: React.SetStateAction<boolean>) => void;
}

const Pagination: React.FC<IProps> = ({ setLoading, lastPage }) => {
  const history = useHistory();
  const location = useLocation();

  const currentUrlParams = new URLSearchParams(location.search);
  const pageParam = currentUrlParams.get("_page");
  const currentPage = pageParam ? Number(pageParam) : 1;

  const handlePageChange = (direction: "next" | "prev") => () => {
    const nextPage = direction === "next" ? currentPage + 1 : currentPage - 1;
    setLoading && setLoading(true);
    setQueryParam("_page", nextPage.toString(), history);
  };

  return (
    <nav className="page-nav">
      <NavButton
        label={eng.PREV}
        isActive={currentPage !== 1}
        disabled={currentPage === 1}
        onClick={handlePageChange("prev")}
      />
      <p className="text-normal">
        {eng.PAGE} <span className="bold">{currentPage}</span>
      </p>
      <NavButton
        label={eng.NEXT}
        isActive={currentPage !== lastPage}
        disabled={currentPage === lastPage}
        onClick={handlePageChange("next")}
      />
    </nav>
  );
};

export default Pagination;
