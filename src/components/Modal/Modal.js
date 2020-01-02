import React from "react";
import "./index.scss";

const Modal = ({ onClick }) => {
  return (
    <div className="modal">
      <div className="modal__header">
        <div className="header__left">Model 3 비교하기</div>
        <div className="header__right" onClick={onClick}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="modal__main">
        <div className="main__header">
          <div className="header__imgs">
            <div className="img__performance"></div>
            <div className="img__longrange"></div>
            <div className="img__standardplus"></div>
          </div>
          <div className="header__trims">
            <div className="trims__trim">
              <div className="trim__name">Performance</div>
              <div className="trim__motor">상시 사륜구동</div>
            </div>
            <div className="trims__trim">
              <div className="trim__name">Long Range</div>
              <div className="trim__motor">상시 사륜구동</div>
            </div>
            <div className="trims__trim">
              <div className="trim__name">Standard Plus</div>
              <div className="trim__motor">후륜구동</div>
            </div>
          </div>
        </div>
        <div className="main__content">
          <div className="dividers">
            <div className="div__left">
              <div className="left__box">&nbsp;가속도</div>
            </div>
            <div className="div__center">
              <div className="center__box">&nbsp;</div>
            </div>
            <div className="div__right">
              <div className="right__box">&nbsp;</div>
            </div>
          </div>
          <div className="content">
            <div className="content__details">
              <div className="content__top">3.2초</div>
              <div className="content__bottom">0-100 km/h</div>
            </div>
            <div className="content__details">
              <div className="content__top">4.6초</div>
              <div className="content__bottom">0-100 km/h</div>
            </div>
            <div className="content__details">
              <div className="content__top">5.6초</div>
              <div className="content__bottom">0-100 km/h</div>
            </div>
          </div>
          <div className="dividers">
            <div className="div__left">
              <div className="left__box">&nbsp;주행 가능 거리</div>
            </div>
            <div className="div__center">
              <div className="center__box">&nbsp;</div>
            </div>
            <div className="div__right">
              <div className="right__box">&nbsp;</div>
            </div>
          </div>
          <div className="content">
            <div className="content__details">
              <div className="content__top">415</div>
              <div className="content__bottom">km</div>
            </div>
            <div className="content__details">
              <div className="content__top">446</div>
              <div className="content__bottom">km</div>
            </div>
            <div className="content__details">
              <div className="content__top">352</div>
              <div className="content__bottom">km</div>
            </div>
          </div>
          <div className="dividers">
            <div className="div__left">
              <div className="left__box">&nbsp;최고 속도</div>
            </div>
            <div className="div__center">
              <div className="center__box">&nbsp;</div>
            </div>
            <div className="div__right">
              <div className="right__box">&nbsp;</div>
            </div>
          </div>
          <div className="content">
            <div className="content__details">
              <div className="content__top">261</div>
              <div className="content__bottom">km/h</div>
            </div>
            <div className="content__details">
              <div className="content__top">233</div>
              <div className="content__bottom">km/h</div>
            </div>
            <div className="content__details">
              <div className="content__top">225</div>
              <div className="content__bottom">km/h</div>
            </div>
          </div>
          <div className="dividers">
            <div className="div__left">
              <div className="left__box">&nbsp;휠</div>
            </div>
            <div className="div__center">
              <div className="center__box">&nbsp;</div>
            </div>
            <div className="div__right">
              <div className="right__box">&nbsp;</div>
            </div>
          </div>
          <div className="content">
            <div className="content__details">
              <div className="content__bottom">20인치 퍼포먼스 휠</div>
              <div className="content__bottom"></div>
            </div>
            <div className="content__details">
              <div className="content__bottom">18인치 에어로 휠</div>
              <div className="content__bottom">19인치 스포츠 휠</div>
            </div>
            <div className="content__details">
              <div className="content__bottom">18인치 에어로 휠</div>
              <div className="content__bottom">19인치 스포츠 휠</div>
            </div>
          </div>
          <div className="dividers">
            <div className="div__left">
              <div className="left__box">&nbsp;포함</div>
            </div>
            <div className="div__center">
              <div className="center__box">&nbsp;</div>
            </div>
            <div className="div__right">
              <div className="right__box">&nbsp;</div>
            </div>
          </div>
          <div className="content">
            <div className="content__details">
              <div className="content__bottom">프리미엄 인테리어</div>
              <div className="content__bottom"></div>
            </div>
            <div className="content__details">
              <div className="content__bottom">프리미엄 인테리어</div>
              <div className="content__bottom"></div>
            </div>
            <div className="content__details">
              <div className="content__bottom">부분 프리미엄 인테리어</div>
              <div className="content__bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
