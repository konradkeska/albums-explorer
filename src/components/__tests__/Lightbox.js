import React from "react";
import ReactDOM from "react-dom";

import Lightbox from "../Lightbox";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Lightbox
      onClose={() => null}
      image={{ albumId: 0, id: 0, title: "", url: "", thumbnailUrl: "" }}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
