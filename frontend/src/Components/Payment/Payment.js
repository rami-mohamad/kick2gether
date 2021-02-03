import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./Payment.scss";
import axios from "axios";

function Payment(props) {
  const [choosedMethod, setChoosedMethod] = useState("Paypal");
  console.log(props.booking);
  const history = useHistory();

  const finishBook = async (e) => {
    e.target.classList.add("swipeMe");
    try {
      const result = await axios.post(
        "http://localhost:4000/booking/book",
        props.booking
      );
      console.log(result.data);
      setTimeout(function () {
        history.push("/booking/confirm");
      }, 2000);
    } catch (error) {
      console.log(error); //later to notification
    }
  };

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
                  <div className="payment_methods_heading">PAYMENT METHOD</div>
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
            <span>Field:</span> {props.booking.field}
          </Col>
          <Col
            className="payment_total_text"
            style={{ borderRight: "1px solid" }}
          ></Col>
          <Col className="payment_total_text" style={{ textAlign: "center" }}>
            {+props.booking.hoursQuantity * 5} €
          </Col>
          <Col></Col>
        </Row>
        {props.booking.shoes.length ? (
          <Row style={{ textAlign: "end", marginTop: "0px" }}>
            <Col className="payment_total_text">Shoes</Col>
            <Col className="payment_total_text">
              <span>Quantity:</span> {props.booking.shoes.length}
            </Col>
            <Col
              className="payment_total_text"
              style={{ borderRight: "1px solid", textAlign: "start" }}
            >
              <span>Size:</span> {props.booking.shoes[0]}
            </Col>
            <Col className="payment_total_text" style={{ textAlign: "center" }}>
              {props.booking.shoes.length * 5} €
            </Col>
            <Col></Col>
          </Row>
        ) : (
          ""
        )}
        {props.booking.tshirt.length ? (
          <Row style={{ textAlign: "end", marginTop: "0px" }}>
            <Col className="payment_total_text">Tshirt</Col>
            <Col className="payment_total_text">
              <span>Quantity:</span> {props.booking.tshirt.length}
            </Col>
            <Col
              className="payment_total_text"
              style={{ borderRight: "1px solid", textAlign: "start" }}
            >
              <span>Size:</span> {props.booking.tshirt[0]}
            </Col>
            <Col className="payment_total_text" style={{ textAlign: "center" }}>
              {props.booking.tshirt.length * 5} €
            </Col>
            <Col></Col>
          </Row>
        ) : (
          ""
        )}
        {props.booking.towels > 0 ? (
          <Row style={{ textAlign: "end", marginTop: "0px" }}>
            <Col className="payment_total_text">Towels</Col>
            <Col className="payment_total_text">
              <span>Quantity:</span> {props.booking.towels}
            </Col>
            <Col
              className="payment_total_text"
              style={{ borderRight: "1px solid", textAlign: "start" }}
            >
              <span>Size:</span> {props.booking.towels}
            </Col>
            <Col className="payment_total_text" style={{ textAlign: "center" }}>
              {props.booking.towels * 5} €
            </Col>
            <Col></Col>
          </Row>
        ) : (
          ""
        )}
        <Row style={{ textAlign: "end", marginTop: "75px" }}>
          <Col className="payment_total_text display">Total</Col>
          <Col className="payment_total_text">
            <div className="payment_confirm">
              <button onClick={finishBook} className="payment_confirm_button">
                confirm payment
              </button>
              <div className="payment_confirm_price">
                {(props.booking.shoes.length +
                  props.booking.tshirt.length +
                  +props.booking.hoursQuantity +
                  props.booking.towels) *
                  5}{" "}
                €
              </div>
            </div>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Payment;
