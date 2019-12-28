// @flow strict

import * as React from 'react';
import './ShopMainThird.css';
import compositor from './compositor.png';


class ShopMainThird extends React.Component {
    render() {
        return (
            <div className="mainLeft" style={{ backgroundImage: `url(${compositor}` }}>
            </div>
        );
    }
}

export default ShopMainThird;