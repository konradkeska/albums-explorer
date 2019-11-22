import React from "react";
import ReactDOM from "react-dom";

import Tile from "../Tile";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Tile album={{ id: 1, title: "test" }} index={1} user="Jan Kowalski" />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
