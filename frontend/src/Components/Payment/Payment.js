import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Payment.scss";

function Payment(props) {
  const [choosedMethod, setChoosedMethod] = useState("Paypal");
  return (
    <div className="payment">
      <Container>
        <Row>
          <Col>
            <div className="progressBar2"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>
              Dear <span>User_Name</span>, please check your details again.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="attention">
              <div className="attention_icon"></div>
              <div>Please complete your payment details.</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="payment_methods">
              <Row>
                <Col>
                  <div
                    style={{
                      background: " #EAC66F",
                      textAlign: "center",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "30px",
                    }}
                  >
                    PAYMENT METHOD
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div
                    style={{
                      borderBottom: "1px solid #858585",
                      background: "#dcdbdb",
                    }}
                  >
                    <div className="payment_option">
                      <div
                        onClick={() => {
                          setChoosedMethod("Rechnung");
                        }}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {choosedMethod === "Rechnung" ? (
                          <div className="payment_circle">
                            <div className="payment_active"></div>
                          </div>
                        ) : (
                          <div className="payment_circle"></div>
                        )}
                        <div>Rechnung</div>
                      </div>
                      <div className="payment_item payment_item_klarna">
                        <div></div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div
                    style={{
                      borderBottom: "1px solid #858585",
                      background: "#dcdbdb",
                    }}
                  >
                    <div className="payment_option">
                      <div
                        onClick={() => {
                          setChoosedMethod("Paypal");
                        }}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {choosedMethod === "Paypal" ? (
                          <div className="payment_circle">
                            <div className="payment_active"></div>
                          </div>
                        ) : (
                          <div className="payment_circle"></div>
                        )}
                        <div>Paypal</div>
                      </div>
                      <div className="payment_item payment_item_paypal">
                        <div></div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div
                    style={{
                      borderBottom: "1px solid #858585",
                      background: "#dcdbdb",
                    }}
                  >
                    <div className="payment_option">
                      <div
                        onClick={() => {
                          setChoosedMethod("Kreditkarte");
                        }}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {choosedMethod === "Kreditkarte" ? (
                          <div className="payment_circle">
                            <div className="payment_active"></div>
                          </div>
                        ) : (
                          <div className="payment_circle"></div>
                        )}
                        <div>Kreditkarte</div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className="payment_item payment_item_apple"></div>
                        <div className="payment_item payment_item_google"></div>
                        <div className="payment_item payment_item_visa"></div>
                        <div className="payment_item payment_item_mastercard"></div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div
                    style={{
                      borderBottom: "1px solid #858585",
                      background: "#dcdbdb",
                    }}
                  >
                    <div className="payment_option">
                      <div
                        onClick={() => {
                          setChoosedMethod("Lastschrift");
                        }}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {choosedMethod === "Lastschrift" ? (
                          <div className="payment_circle">
                            <div className="payment_active"></div>
                          </div>
                        ) : (
                          <div className="payment_circle"></div>
                        )}
                        <div>Lastschrift</div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className="payment_item payment_item_paydirekt"></div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="payment_total_header">Your Payment Chart</Col>
        </Row>
        <Row style={{ textAlign: "end", marginTop: "20px" }}>
          <Col className="payment_total_text">Booked Field</Col>
          <Col className="payment_total_text">
            <span>Field:</span> 3
          </Col>
          <Col
            className="payment_total_text"
            style={{ borderRight: "1px solid" }}
          ></Col>
          <Col className="payment_total_text" style={{ textAlign: "center" }}>
            15 €
          </Col>
          <Col></Col>
        </Row>
        <Row style={{ textAlign: "end", marginTop: "0px" }}>
          <Col className="payment_total_text">Shoes</Col>
          <Col className="payment_total_text">
            <span>Quantity:</span> 1
          </Col>
          <Col
            className="payment_total_text"
            style={{ borderRight: "1px solid", textAlign: "start" }}
          >
            <span>Size:</span> 43
          </Col>
          <Col className="payment_total_text" style={{ textAlign: "center" }}>
            15 €
          </Col>
          <Col></Col>
        </Row>
        <Row style={{ textAlign: "end", marginTop: "75px" }}>
          <Col className="payment_total_text">Total</Col>
          <Col className="payment_total_text">
            <div className="payment_confirm">
              <button
                onClick={(e) => {
                  e.target.classList.add("swipeMe");
                }}
                className="payment_confirm_button"
              >
                confirm payment
              </button>
              <div className="payment_confirm_price">20 €</div>
            </div>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Payment;
