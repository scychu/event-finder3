import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from 'reactstrap';
import LandingPage from '../Views/LandingPage';
import EventDetail from "../Views/EventDetail";
import EventbyCategory from "../Views/EventbyCategory";
// import EventLists from "../Views/EventLists";
export default function Routes() {
  
    return (
      <Switch>
        <Route path="/" component={LandingPage} exact />
          {/* <Route path="/" component={EventLists} exact /> */}
        {/* <Route path="/eventlist" component={EventLists} exact /> */}

        <Route path="/detail/:title/:id" component={EventDetail} exact />
        {/* <Route path="/categories/:category" component={EventbyCategory} exact /> */}
        <Container>
          <col>
          <Route path="/categories/:category" component={EventbyCategory} exact />
          </col>
        </Container>
        {/* <Route component={NotFound} /> */}
      </Switch>
    );
  }
  