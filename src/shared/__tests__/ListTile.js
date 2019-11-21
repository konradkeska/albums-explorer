import React from "react";
import ReactDOM from "react-dom";

import ListTile from "../ListTile";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ListTile album={{ id: 1, title: "test" }} index={1} user="Jan Kowalski" />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
