import React from "react";
import ReactDOM from "react-dom";

import Photo from "../Tile/Photo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Photo
      photo={{ albumId: 0, id: 0, title: "", url: "", thumbnailUrl: "" }}
      onClick={() => null}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
