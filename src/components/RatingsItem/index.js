import React from "react";
import "./index.scss";

const RatingsItem = ({ category, side, rating }) => {
  const star = "★";

  return (
    <div className="ratings-item">
      <div className="item__left">
        <div className="left__top">{category}</div>
        <div className="left__bottom">{side}</div>
      </div>
      <div className="item__right">
        <span className="right__stars">{star.repeat(rating)}</span>
      </div>
    </div>
  );
};

export default RatingsItem;
