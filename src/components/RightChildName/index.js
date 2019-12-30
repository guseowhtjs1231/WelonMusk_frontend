import React from "react";
import "./index.scss";
const RightChildName = props => {
  return (
    <div className="itemLink">
      <span>{props.one}</span>
      <a href="" className="linkColorRight">
        {props.two}
      </a>
    </div>
  );
};

export default RightChildName;
