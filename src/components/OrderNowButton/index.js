import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const OrderNowButton = () => {
  return (
    <Link to="/shop/model3/1">
      <div className="btn-order-now-container">
        <button className="btn-order-now">지금 주문하기</button>
      </div>
    </Link>
  );
};

export default OrderNowButton;
