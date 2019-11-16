import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { App } from "chunks";

import Spinner from "./shared/Spinner";

export default (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact={true} path="/" component={App} />
      </Switch>
    </Suspense>
  </Router>
);
