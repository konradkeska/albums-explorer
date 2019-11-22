import React from "react";

const NoResults: React.FC = () => (
  <div className="text-alert">
    <p>Sorry, no results were found. </p>
    <p>
      To start searching again: enter phrase and hit&nbsp;
      <kbd className="key">Enter</kbd>.
    </p>
  </div>
);

export default NoResults;
