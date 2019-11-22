import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

import Pagination from "../Pagination";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router history={createMemoryHistory()}>
      <Pagination />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
