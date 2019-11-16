import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import routes from "./routes";
import store from "./store";

const Root = () => (
  <Provider store={store}>
    {routes}
    <ToastContainer />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
