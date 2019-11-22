import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

import Navigation from "../Navigation";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router history={createMemoryHistory()}>
      <Navigation />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
