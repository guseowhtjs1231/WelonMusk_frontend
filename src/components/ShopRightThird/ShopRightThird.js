// @flow strict

import * as React from 'react';
import './ShopRightThird.css';
import purewhite from './purewhite.png'
import pureblack from './pureblack.png'

class ShopRightThird extends React.Component {
    render() {
        return (
            <div className="mainRight">
                <div className="select">
                    <div className="selectTop">
                        <div className="selectList">
                            <span>인테리어 선택하기</span>
                        </div>
                        <div className="colors">
                            <div className="paddingBlock">
                                <div className="colorBorder">
                                    <img className="color" src={pureblack}></img>
                                </div>
                            </div>
                            <div className="paddingBlock">
                                <div className="colorBorder">
                                    <img className="color" src={purewhite}></img>
                                </div>
                            </div>
                        </div>
                        <div className="colorNames">
                            <p className="carColorName">All Black</p>
                            <p className="vhgka">포함</p>
                        </div>
                    </div>
                    <div className="textLorder">
                        <p>기본사항:</p>
                        <ul className="textLorderLists">
                            <li className="textLorderList"><span>12방향 전동 조절식 앞좌석 열선 시트</span></li>
                            <li className="textLorderList"><span>프리미엄 시트 소재 및 트림</span></li>
                            <li className="textLorderList"><span>오디오 업그레이드 – 높은 몰입도의 사운드</span></li>
                            <li className="textLorderList"><span>Bluetooth®를 통한 음악 및 미디어 재생</span></li>
                            <li className="textLorderList"><span>자외선 및 적외선 보호장치가 장착된 틴티드 글래스 루프</span></li>
                            <li className="textLorderList"><span>자동 조도 조절, 전동식 폴딩이 가능한 열선 사이드 미러</span></li>
                            <li className="textLorderList"><span>사용자 지정 운전자 프로필</span></li>
                            <li className="textLorderList"><span>수납 공간, 4개의 USB 포트 및 2개의 스마트폰 도킹을 포함한 센터 콘솔</span></li>
                        </ul>

                    </div>

                </div>
            </div>
        );
    }
}

export default ShopRightThird;