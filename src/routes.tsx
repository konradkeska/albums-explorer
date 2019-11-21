import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AlbumDetails, Albums } from "chunks";

import AppLayout from "layouts/AppLayout";

import Spinner from "./shared/Spinner";

export default (
  <Router>
    <AppLayout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact={true} path="/albums" component={Albums} />
          <Route path="/albums/:id" component={AlbumDetails} />
        </Switch>
      </Suspense>
    </AppLayout>
  </Router>
);
