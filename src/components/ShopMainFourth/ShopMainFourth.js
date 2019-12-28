// @flow strict

import * as React from 'react';
import compositor from './compositor.png';


class ShopMainFourth extends React.Component {
    render() {
        return (
            <div className="mainLeft" >
                <div className="explanationBlock">
                    <p className="explanationName">오토파일럿</p>
                    <p className="explanation">오토파일럿 첨단 안전 및 편의 기술은 주행 시에 가장 부담스러울 수 있는 부분을 돕도록 설계되었습니다.
             새로운 Tesla 차량에는 긴급 제동, 충돌 경고 및 사각지대 모니터링 등과 같은 운전자 보조 기능이 기본으로 탑재됩니다.</p>
                </div>
                <video className="video" width="90%" src="https://www.tesla.com/ns_videos/models/autonomy/hero.mp4" muted autoPlay loop></video>

            </div>
        );
    }
}

export default ShopMainFourth;