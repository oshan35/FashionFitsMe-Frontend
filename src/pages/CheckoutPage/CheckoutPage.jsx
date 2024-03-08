import React from "react";
import "./CheckoutPage.css";
import { Button, Radio, Input, Flex, Row, Col } from "antd";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import OrderSummary from "../../components/orderSummary/OrderSummary";
import PriceCard from "../../components/pricecard/pricecard";

const { TextArea } = Input;

const CheckoutPage = () => {
  const onChange = (e) => {
    console.log(e);
  };

  return (
    <>
      <Navbar />
      <Row>
        <Col className="column" span={14}>
          <Flex className="heading">CHECKOUT AS GUEST</Flex>
          <Flex className="text-1">or sign in for faster checkout</Flex>
          <Flex className="text-2">SHIPPING TO</Flex>
          <hr className="line" />
          <TextArea
            className="address-box"
            showCount
            maxLength={100}
            onChange={onChange}
            placeholder="John Smith
                184 N Main St Ste 1
                New City, NY 10956-3761
                076 179 5988"
          />
          <Flex className="text-3">SHIPPING METHOD</Flex>
          <Radio.Group className="checkbox-group" onChange={onChange}>
            <Col>
              <Row>
                <Radio className="checkbox-text" value="A">
                  <span className="text-5">$9.95 Standard </span> <br />
                  <span className="text-5">
                    Transit time 3-6 business days
                  </span>{" "}
                  <br />
                  <span className="text-5">Estimated arrival on or before</span>{" "}
                  <span className="text-4"> 01/10/2024 </span>
                </Radio>
              </Row>
              <hr className="checkbox-line" />
              <Row>
                <Radio className="checkbox-text" value="B">
                  <span className="text-5">$25 Second Day</span>
                </Radio>
              </Row>
              <hr className="checkbox-line" />
              <Row>
                <Radio className="checkbox-text" value="C">
                  <span className="text-5">$35.00 Over night</span>
                </Radio>
              </Row>
              <hr className="checkbox-line" />
            </Col>
          </Radio.Group>
          <Flex className="text-6">
            Orders placed by 1:00 pm ET Monday-Friday usually process the same
            day. Shipping price <br /> may update once the address is entered.
          </Flex>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button className="button" type="default">
              CONTINUE PAYMENT
            </Button>
          </div>
        </Col>

        <Col className="column" span={10}>
          <OrderSummary />
          <hr />
        </Col>
      </Row>

      <Footer />
    </>
  );
};
export default CheckoutPage;
