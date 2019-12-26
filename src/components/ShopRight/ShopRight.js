// @flow strict

import * as React from 'react';
import './ShopRight.css';



class ShopRight extends React.Component{
    render() {
        return (
          <div className="mainRight">
          <div className="mainRightItem">
               <div className="itemTop">
                   <p>차량 선택하기</p>
                   <span>후륜구동 (RWD)</span>
               </div>
               <div className="emptyBlockRight">
               </div>
               <div className="item">
                 <div className ="itemLink">
                   <a href="" className="linkColorRight">부분 프리미엄 인테리어</a>   
                 </div>
                 <button type="button" className="priceBox">
                      <p className="priceBoxName">Standard Range Plus</p>
                      <p className="priceBoxMoney">￦53,690,000</p>
                 </button>
                </div> 
                 <div className="itemCenter">
                    <span>듀얼 모터 상시 사륜구동 (AWD)</span>
                 </div>
                 <div className="item">
                 <div className ="itemLink">
                   <a href="" className="linkColorRight">프리미엄 인테리어</a>   
                 </div>
                 <button type="button" className="priceBox">
                 <p className="priceBoxName">Long Range</p>
                 <p className="priceBoxMoney">￦63,690,000</p>
                 </button>
                 <button type="button" className="priceBox">
                 <p className="priceBoxName">Performance</p>
                 <p className="priceBoxMoney">￦73,690,000</p>
                 </button>
                </div> 
                
                </div>
       </div>
        );
    }
}

export default ShopRight;