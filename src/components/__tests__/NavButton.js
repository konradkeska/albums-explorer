import React from "react";
import ReactDOM from "react-dom";

import NavButton from "../NavButton";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavButton label="test" isActive={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
