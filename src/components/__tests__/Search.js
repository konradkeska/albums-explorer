import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

import Search from "../Search";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router history={createMemoryHistory()}>
      <Search />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
