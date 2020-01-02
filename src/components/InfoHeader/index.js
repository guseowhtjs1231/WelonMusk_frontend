import React from "react";
import "./index.scss";

const InfoHeader = ({ text, id }) => {
  return (
    <div id={id} className="info-header">
      {text}
    </div>
  );
};

export default InfoHeader;
