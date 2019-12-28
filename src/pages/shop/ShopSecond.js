// @flow strict

import * as React from 'react';
import ShopNav from './Components/ShopSecond/ShopNav';

import ShopBottom from './Components/ShopSecond/ShopBottom';
import './ShopSecond/Shop.css';
import ShopRightSecond from '../../components/ShopSecond/ShopRight/ShopRightSecond';
import ShopMainSecond from '../../components/ShopSecond/ShopMain/ShopMainSecond';


class ShopSecond extends React.Component {
    render() {
        return (
            <div className="Layout">
                <ShopNav></ShopNav>
                <div className="main">
                    <ShopMainSecond></ShopMainSecond>
                    <ShopRightSecond></ShopRightSecond>
                </div>
                <ShopBottom></ShopBottom>

            </div>
        );
    }
}

export default ShopSecond;