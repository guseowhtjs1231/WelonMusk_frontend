import React from "react";
import MoreDetails from "../MoreDetails";
import OrderNowButton from "../OrderNowButton";
import "./index.scss";

const DetailsAndOrder = () => {
  return (
    <div className="details-order">
      <MoreDetails />
      <OrderNowButton />
    </div>
  );
};

export default DetailsAndOrder;
