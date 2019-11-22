import React from "react";
import ReactDOM from "react-dom";

import DetailRow from "../DetailRow";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DetailRow label="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
