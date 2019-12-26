// @flow strict

import * as React from 'react';
import './ShopMain.css';

class ShopMain extends React.Component{
    render() {
        return (
            <div className="mainLeft" style={{backgroundImage:`url(${carImage}`}}>
            
               
            <ul className="carPerformance">
                <li className="performance">
                    <p className="performanceList">352<span className="plColor1">km</span></p>
                    <span className="plColor2">주행 가능 거리</span>
                </li>
                <li className="performance">
                    <p className="performanceList">225<span className="plColor1">km/h</span></p>
                    <span className="plColor2">최고속도</span>
                </li>
                <li className="performanceBorder">
                    <p className="performanceList">5.6<span className="plColor1">초</span></p>
                    <span className="plColor2">0-100 km/h 도달시간</span>
                </li>
            </ul>


    </div>
        );
    }
}

export default ShopMain;