import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModelS from "./pages/ModelS";
import Model3 from "./pages/Model3";
import ModelX from "./pages/ModelX";
import Shop from "./pages/Shop";
import ShopSecond from "./pages/Shop/ShopSecond";
import ShopThird from "./pages/Shop/ShopThird";
import ShopFourth from "./pages/Shop/ShopFourth";
import ShopLast from "./pages/Shop/ShopLast";
import ShopStep from "./components/ShopStep";
import Signin from "./pages/Signin/index";
import Signup from "./pages/Signup/index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/models" component={ModelS} />
        <Route path="/model3" component={Model3} />
        <Route exact path="/shop/model3" component={Shop} />
        <Route path="/modelx" component={ModelX} />
        {/* <Route path="/shop" component={Shop} /> */}
        <Route path="/shop2" component={ShopSecond} />
        <Route path="/shop3" component={ShopThird} />
        <Route path="/shop4" component={ShopFourth} />
        <Route path="/shop5" component={ShopLast} />
        <Route path="/shop/model3/:step" component={ShopStep} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        {/* <Route path="/signup" component={Signup} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
