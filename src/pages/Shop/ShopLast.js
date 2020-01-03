import * as React from "react";
import ShopNav from "../../components/ShopNav";
import ShopMainLast from "../../components/ShopMainLast";
import ShopBottom from "../../components/ShopBottom";
import carImage from "../../img/shop/tesla.png";
import ShopRightLastItem from "../../components/ShopRightLastItem";
import RightLastPay from "../../components/RightLastPay";
import ShopRightLastItemTwo from "../../components/ShopRightLastItemTwo";
import Backdrop from "../../components/Backdrop";
import "./ShopLast.scss";

class ShopLast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      footerPrice: {},
      isLoading: true,
      showModal: false
    };
  }

  componentDidMount() {
    fetch("http://13.209.16.32:8000/price/option/2")
      .then(res => res.json())
      .then(res => this.setState({ footerPrice: res.price, isLoading: false }));
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { footerPrice, isLoading, showModal } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        {showModal && <Backdrop />}

        <div className="Layout">
          <ShopNav></ShopNav>
          <div className="main">
            <ShopMainLast></ShopMainLast>
            <div className="mainRightLast">
              <div className="carPayment">
                <div className="carImage">
                  <img src={carImage} alt="car"></img>
                </div>
                <div className="carName">
                  <span>
                    귀하의 <strong>Model 3</strong>
                  </span>
                </div>
                <div className="boxbox">
                  <div className="paymentMiddle">
                    <span>요약</span>
                  </div>
                  <ul>
                    <ShopRightLastItem
                      span1="Model 3 Standard Plus RWD"
                      dollor="₩"
                      span2="53,690,000"
                    />
                    <ShopRightLastItem
                      span1="Pearl White Multi-Coat"
                      span2="포함"
                    />
                    <ShopRightLastItem span1="18인치 에어로 휠" span2="포함" />
                    <ShopRightLastItem
                      span1="Black & White 부분 프리미엄 인테리어"
                      dollor="₩"
                      span2="1,286,000"
                    />
                    <ShopRightLastItem span1="오토파일럿" span2="포함" />
                    <ShopRightLastItem
                      span1="완전 자율 주행 기능"
                      dollor="₩"
                      span2="7,714,000"
                    />
                  </ul>
                  <ShopRightLastItemTwo name="구매가격" price="₩62,690,000" />
                  <ul>
                    <ShopRightLastItem
                      span1="향후 5년 간 예상 연료비 절감"
                      dollor="- ₩"
                      span2="5,000,000"
                    />
                  </ul>
                  <ShopRightLastItemTwo
                    name="예상 전체 절감 비용"
                    price="-₩5,000,000"
                  />
                  <div className="paymentBottom">
                    <div className="paymentBottomItem">
                      <span>예상 전체 절감 비용 반영 후 가격</span>
                      <span className="strong">
                        <strong>₩{footerPrice.saving_price}</strong>
                      </span>
                    </div>
                    <div className="post">
                      모든 절감 비용은 구매 이후 경험하게 됩니다.
                    </div>
                    <div className="buttonDiv">절감 계산 방법 보기</div>
                  </div>
                  <RightLastPay
                    one="예상 전체 절감 비용 반영 후 가격"
                    two="구매가격"
                    three="세금 및 수수료 제외"
                    money={footerPrice.saving_price}
                    money2={footerPrice.expected_price}
                    money3="3,000,000"
                  />
                  <div className="emptyDiv"></div>
                </div>
              </div>
            </div>
          </div>
          <ShopBottom
            onClick={this.toggleModal}
            nextPage="/shop/model3/5"
            expectedPrice={footerPrice.expected_price}
            savingPrice={footerPrice.saving_price}
          />
        </div>
      </>
    );
  }
}

export default ShopLast;
