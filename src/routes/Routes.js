import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from '../Views/LandingPage';
import EventDetail from "../Views/EventDetail";
export default function Routes() {
    return (
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/detail/:title/:id" component={EventDetail} exact />
        <Route path="/categories/:category" component={EventDetail} exact />

        {/* <Route component={NotFound} /> */}
      </Switch>
    );
  }
  