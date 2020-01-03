import React from "react";
import ShopFirst from "../../pages/Shop";
import ShopSecond from "../../pages/Shop/ShopSecond";
import ShopThird from "../../pages/Shop/ShopThird";
import ShopFourth from "../../pages/Shop/ShopFourth";
import ShopLast from "../../pages/Shop/ShopLast";

const ShopStep = ({ match }) => {
  console.log(match);
  const { step } = match.params;

  if (!step) {
    return <div>ERROR</div>;
  }

  switch (step) {
    case "1":
      return <ShopFirst />;
    // break;
    case "2":
      return <ShopSecond />;
    // break;
    case "3":
      return <ShopThird />;
    // break;
    case "4":
      return <ShopFourth />;
    // break;
    case "5":
      return <ShopLast />;
    // break;
    default:
      return <ShopFirst />;
  }
};

export default ShopStep;
