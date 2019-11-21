import React from "react";

import eng from "lang/eng";

const Pagination: React.FC = () => {
  return (
    <nav className="page-nav">
      <button className="page-nav__button page-nav__button--active">
        {eng.PREV}
      </button>
      <p className="text-normal">
        <span className="gray">
          {eng.PAGE} <span className="bold">7</span> {eng.OF}{" "}
          <span className="bold">100</span>
        </span>
      </p>
      <button className="page-nav__button page-nav__button--active">
        {eng.NEXT}
      </button>
    </nav>
  );
};

export default Pagination;
