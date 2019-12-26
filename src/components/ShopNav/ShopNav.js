// @flow strict

import * as React from 'react';



class ShopNav extends React.Component{
    render() {
        return (
            <div className="nav">
            <div className="carNav">
              
             <div className="teslaLogo">
              <h1>
              <img  className="Logo"src={tesla}></img>
              </h1>
             </div>
             <div className="packageOptions">
                 <ul className="packageOptionsList">
                   <li>1.<h2 className="Listname">자동차</h2></li>
                   <li>2.<h2 className="Listname">외부</h2></li>  
                   <li>3.<h2 className="Listname">인테리어</h2></li>  
                   <li>4.<h2 className="Listname">오토파일럿</h2></li>  
                   <li>5.<h2 className="Listname">결제</h2></li>             
                 </ul>               
             </div>
             <div className="country">
                    <img src={img}></img> 
                 </div>
          
            </div>
          </div>
        );
    }
}

export default ShopNav;