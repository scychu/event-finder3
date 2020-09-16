import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from '../Views/LandingPage';
import EventDetail from "../Views/EventDetail";
import EventbyCategory from "../Views/EventbyCategory";
import EventLists from "../Views/EventLists";
import CategoryList from "../Views/CategoryList";
import NotFound from "../Views/NotFound";
export default function Routes() {
  
    return (
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/home" component={EventLists} exact />
        <Route path="/detail/:title/:id" component={EventDetail} exact />
        <Route path="/categories" component={CategoryList} exact />
        <Route path="/categories/:category/:id" component={EventbyCategory} exact />
        <Route component={NotFound} />
      </Switch>
    );
  }
  