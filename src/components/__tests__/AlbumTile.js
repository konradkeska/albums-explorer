import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

import AlbumTile from "../Tile/Album";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router history={createMemoryHistory()}>
      <AlbumTile
        album={{ id: 1, title: "test" }}
        index={1}
        user="Jan Kowalski"
      />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
