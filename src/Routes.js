import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Model3 from "./pages/Model3";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/model3" component={Model3} />
      </Switch>
    </Router>
  );
};

export default Routes;
