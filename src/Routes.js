import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModelS from "./pages/ModelS";
import Model3 from "./pages/Model3";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/models" component={ModelS} />
        <Route path="/model3" component={Model3} />
      </Switch>
    </Router>
  );
};

export default Routes;
