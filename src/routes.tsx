import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AlbumDetails, Albums, PageNotFound } from "chunks";

import AppLayout from "layouts/AppLayout";

export default (
  <Router>
    <AppLayout>
      <Suspense fallback={null}>
        <Switch>
          <Route exact={true} path="/" component={Albums} />
          <Route path="/albums/:id" component={AlbumDetails} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </AppLayout>
  </Router>
);
