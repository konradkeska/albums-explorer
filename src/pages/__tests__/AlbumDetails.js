import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

import AlbumDetails from "../AlbumDetails";
import store from "store";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Router history={createMemoryHistory()}>
        <AlbumDetails />
      </Router>
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
