import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const OrderNowButton = () => {
  return (
    <div className="btn-order-now-container">
      <Link to="/shop">
        <button className="btn-order-now">지금 주문하기</button>
      </Link>
    </div>
  );
};

export default OrderNowButton;
