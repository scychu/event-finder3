import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from '../Views/LandingPage';
export default function Routes() {
    return (
      <Switch>
        <Route path="/" component={LandingPage} exact />
        {/* <Route component={NotFound} /> */}
      </Switch>
    );
  }
  