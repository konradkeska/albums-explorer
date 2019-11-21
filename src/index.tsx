import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import "react-toastify/dist/ReactToastify.css";

import routes from "./routes";
import store from "./store";

const Root = () => <Provider store={store}>{routes}</Provider>;

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
