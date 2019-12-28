// @flow strict

import * as React from 'react';
import './Shop.css';
import ShopMainThird from '../../components/ShopMainThird/ShopMainThird';
import ShopRightThird from '../../components/ShopRightThird/ShopRightThird';
import ShopNav from '../../components/ShopNav/ShopNav';
import ShopNav from '../../components/ShopNav/ShopBottom';
class ShopThird extends React.Component {
    render() {
        return (
            <div className="Layout">
                <ShopNav></ShopNav>
                <div className="main">
                    <ShopMainThird></ShopMainThird>
                    <ShopRightThird></ShopRightThird>
                </div>
                <ShopBottom></ShopBottom>
            </div>
        );
    }
}

export default ShopThird;