import React from "react";
import RatingsItem from "../RatingsItem";
import "./index.scss";

const Ratings = ({ data }) => {
  const RatingsItems = data.map(el => {
    return (
      <RatingsItem category={el.category} side={el.side} rating={el.rating} />
    );
  });

  return (
    <div className="ratings">
      <div className="ratings__header">
        <span className="bold">NHTSA&nbsp;</span>
        <span>종합평가 별 5개 등급</span>
      </div>
      <div className="ratings__items">{RatingsItems}</div>
    </div>
  );
};

export default Ratings;
