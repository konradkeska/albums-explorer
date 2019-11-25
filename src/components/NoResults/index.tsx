import React from "react";

import eng from "lang/eng";

import "./NoResults.scss";

const NoResults: React.FC = () => (
  <section className="results full-width">
    <div className="text-alert">
      <p>{eng.RESULTS_NOT_FOUND}</p>
      <p>
        {eng.SEARCH_AGAIN} <kbd className="key">{eng.ENTER}</kbd>.
      </p>
    </div>
  </section>
);

export default NoResults;
