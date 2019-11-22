import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

import AppLayout from "../AppLayout";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router history={createMemoryHistory()}>
      <AppLayout />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
