import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModelS from "./pages/ModelS";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/models" component={ModelS} />
      </Switch>
    </Router>
  );
};

export default Routes;
