import React from "react";
import "./index.scss";

const MoreDetails = () => {
  return (
    <div className="more-details">
      <div className="more-details__btn-add">
        <button>
          <i class="fas fa-plus btn-icon"></i>
        </button>
      </div>
      <div className="more-details__text">자세히 알아보기</div>
    </div>
  );
};

export default MoreDetails;
