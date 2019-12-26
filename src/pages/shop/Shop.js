// @flow strict

import * as React from 'react';
import ShopNav from './Components./ShopNav';
import ShopMain from './Components./ShopMain';
import ShopRight from './Components./ShopRight';
import ShopBottom from './Components./ShopBottom';
import './Shop.css';


class Shop extends React.Component {
    render() {
        return (
            <div className="Layout">
                <ShopNav></ShopNav>
                <div className="main">
                <ShopMain></ShopMain>
                <ShopRight></ShopRight>
                </div>  
               <ShopBottom></ShopBottom>
                  
            </div>
        );
    }
}

export default Shop;