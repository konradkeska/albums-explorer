import React from "react";

const Pagination: React.FC = () => {
  return (
    <nav className="page-nav">
      <button className="page-nav__button page-nav__button--active">
        previous
      </button>
      <p className="text-normal">
        <span className="gray">
          page <span className="bold">7</span> of{" "}
          <span className="bold">100</span>
        </span>
      </p>
      <button className="page-nav__button page-nav__button--active">
        next
      </button>
    </nav>
  );
};

export default Pagination;
