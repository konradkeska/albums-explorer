import React from "react";
import ReactDOM from "react-dom";

import Filters from "../Filters";

it("renders without crashing", () => {
  const mockedItems = [
    {
      label: "results",
      onChange: (e) => {
        console.log(e.currentTarget.value);
      },
      options: [5, 10, 20, 50, 100],
    },
  ];

  const div = document.createElement("div");
  ReactDOM.render(<Filters items={mockedItems} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
