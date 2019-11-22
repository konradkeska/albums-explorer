import * as React from "react";
import { useHistory } from "react-router";

import eng from "lang/eng";

import "./Pagination.scss";

const Navigation: React.FC = () => {
  const history = useHistory();

  const goBack = () => history.goBack();

  return (
    <nav className="page-nav">
      <button
        onClick={goBack}
        className="page-nav__button page-nav__button--active"
      >
        {eng.GO_BACK}
      </button>
    </nav>
  );
};

export default Navigation;
