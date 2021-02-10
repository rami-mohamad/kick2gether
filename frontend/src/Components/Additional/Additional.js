import React, { useState, useEffect, useRef } from "react";
import "./Additional.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Additional(props) {
  const booking = { ...props.booking };
  console.log(booking);

  ///States
  const [shoesQuantity, setshoesQuantity] = useState(0);
  const [tshirtsQuantity, setTshirtsQuantity] = useState(0);
  const [towelsQuantity, setTowelsQuantity] = useState(0);
  const [shoeSize, setShoeSize] = useState(40);
  const [tshirtSize, setTshirtSize] = useState("M");

  const [showShoes, setShowShoes] = useState(false);
  const [showTshirts, setShowTshirts] = useState(false);

  /////////////End States
  ///////////Sizes
  const shoesSizes = [36, 37, 38, 39, 40, 41, 42, 43, 44];
  const shirtSizes = ["S", "M", "L", "XL", "XXL"];

  /////////////End Sizes
  ///Prepare booking object vefore payment
  const getClothes = (checkQuantity, size) => {
    if (checkQuantity === 0) {
      return [];
    } else {
      if (size > 0) {
        const pack = [];
        for (let i = 0; i < checkQuantity; i++) {
          pack.push(+size);
        }

        return pack;
      } else {
        const pack = [];
        for (let i = 0; i < checkQuantity; i++) {
          pack.push(`${size}`);
        }

        return pack;
      }
    }
  };
  const preparedBooking = {
    field: +booking.field,
    startTime: `${booking.date}T${booking.startHour}:00`,
    endTime: `${booking.date}T${
      +booking.startHour + +booking.hoursQuantity
    }:00`,
    numberOfPersons: +booking.users,
    tshirt: getClothes(tshirtsQuantity, tshirtSize),
    shoes: getClothes(shoesQuantity, shoeSize),
    towels: towelsQuantity,
    hoursQuantity: booking.hoursQuantity,
  };
  console.log(preparedBooking);
  console.log(typeof tshirtsQuantity);

  ///end of prepare booking
  ///////////
  return (
    <div className="additional">
      <Container>
        <Row>
          <Col>
            <div className="progressBar1"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="additional_heading2">
              You forgot about your shoes? No problem!
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className=" additional_heading2 additional_heading3">
              We offer to our users the option to rent shoes or buy t-shirts,
              towels etc.
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="prebook_information">
              <Row style={{ margin: "0px", height: "50%" }}>
                <Col className="prebook_information_label ">User</Col>
                <Col className="prebook_information_label ">Field</Col>
                <Col className="prebook_information_label ">DATE & TIME</Col>
                <Col
                  className="prebook_information_label "
                  style={{ borderRight: "none" }}
                >
                  Total
                </Col>
              </Row>
              <Row style={{ margin: "0px", height: "50%" }}>
                <Col className=" prebook_information_label prebook_information_remove_bottom ">
                  {booking.users === "1"
                    ? `USER_NAME`
                    : `USER_NAME +  ${booking.users - 1}`}
                </Col>
                <Col className="prebook_information_label prebook_information_remove_bottom ">
                  {booking.field}
                </Col>
                <Col className="prebook_information_label prebook_information_remove_bottom ">
                  {/*  21.12.2020 at 16:00 h */}
                  {`${booking.date} at ${booking.startHour}:00 `}
                </Col>
                <Col
                  className="prebook_information_label prebook_information_remove_bottom "
                  style={{ borderRight: "none" }}
                >
                  {`${
                    preparedBooking.numberOfPersons *
                    +preparedBooking.hoursQuantity *
                    5
                  } €`}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "55px" }}>
          <Col xs="6" sm="6">
            <div className="additional_icons"></div>
          </Col>
          <Col xs={{ size: "6", offset: 0 }} sm={{ size: "5", offset: 1 }}>
            <div className="additional_choose_addons">
              <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
                <Col className="oneBlockSmall removeLeft removeTop">QTY</Col>
                <Col className="oneBlockSmall removeTop removeLeft removeRight">
                  SZ
                </Col>
                <Col className="oneBlockSmall removeTop removeRight">PRC</Col>
              </Row>
              <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
                <Col className="oneBlock removeLeft removeTop ">
                  {/*  */}
                  <div className="itemQuantity">
                    <FontAwesomeIcon
                      icon={faAngleUp}
                      onClick={() => {
                        setshoesQuantity(shoesQuantity + 1);
                      }}
                    />
                    <div>{shoesQuantity}</div>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      onClick={() => {
                        if (shoesQuantity > 0) {
                          setshoesQuantity(shoesQuantity - 1);
                        }
                      }}
                    />
                  </div>
                  {/*  */}
                </Col>
                <Col className="oneBlock removeLeft removeTop shoeList">
                  <div
                    className="chooseList"
                    onClick={() => {
                      setShowShoes(!showShoes);
                      console.log(showShoes);
                    }}
                  >
                    {shoeSize}

                    <FontAwesomeIcon
                      icon={faCaretDown}
                      style={{ marginLeft: "10px" }}
                    />
                    {showShoes ? (
                      <ul>
                        {shoesSizes.map((elem) => {
                          return (
                            <li
                              key={elem}
                              onClick={(e) => {
                                setShoeSize(e.target.textContent);
                              }}
                            >
                              {elem}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <ul style={{ display: "none", zIndex: "-1" }}></ul>
                    )}
                  </div>
                </Col>
                <Col className="oneBlock removeRight removeLeft removeTop">
                  5 €
                </Col>
              </Row>
              <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
                <Col className="oneBlock removeLeft removeTop ">
                  <div className="itemQuantity">
                    <FontAwesomeIcon
                      icon={faAngleUp}
                      onClick={() => {
                        setTshirtsQuantity(tshirtsQuantity + 1);
                      }}
                    />
                    <div>{tshirtsQuantity}</div>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      onClick={() => {
                        if (tshirtsQuantity > 0) {
                          setTshirtsQuantity(tshirtsQuantity - 1);
                        }
                      }}
                    />
                  </div>
                </Col>
                <Col className="oneBlock removeLeft removeTop shoeList">
                  <div
                    className="chooseList"
                    onClick={() => {
                      setShowTshirts(!showTshirts);
                      console.log(showTshirts);
                    }}
                  >
                    {tshirtSize}

                    <FontAwesomeIcon
                      icon={faCaretDown}
                      style={{ marginLeft: "10px" }}
                    />
                    {showTshirts ? (
                      <ul>
                        {shirtSizes.map((elem) => {
                          return (
                            <li
                              key={elem}
                              onClick={(e) => {
                                setTshirtSize(e.target.textContent);
                              }}
                            >
                              {elem}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <ul style={{ display: "none", zIndex: "-1" }}></ul>
                    )}
                  </div>
                </Col>
                <Col className="oneBlock removeRight removeLeft removeTop">
                  5 &euro;
                </Col>
              </Row>
              <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
                <Col className="oneBlock removeLeft removeTop removeBottom ">
                  <div className="itemQuantity">
                    <FontAwesomeIcon
                      icon={faAngleUp}
                      onClick={() => {
                        setTowelsQuantity(towelsQuantity + 1);
                      }}
                    />
                    <div>{towelsQuantity}</div>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      onClick={() => {
                        if (towelsQuantity > 0) {
                          setTowelsQuantity(towelsQuantity - 1);
                        }
                      }}
                    />
                  </div>
                </Col>
                <Col className="oneBlock removeLeft removeTop removeBottom">
                  M
                </Col>
                <Col className="oneBlock removeRight removeLeft removeTop removeBottom">
                  5 €
                </Col>
              </Row>
            </div>
          </Col>
          <Col>
            <div style={{ marginTop: "30px" }}>
              <h4 className="display">Important Information</h4>
              <div className="additional_info">
                After booking You wil get your personal pin code for this
                booking. This PIN CODE you have to use for getting in and using
                your Field. Everythink that you booked Towels , Shoes or Tshirt
                will be prapared for you on clothes box.
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "70px",
                }}
              >
                <input
                  type="submit"
                  value="checkout"
                  className="checkoutButton"
                  onClick={() => {
                    props.setBooking(preparedBooking);
                    props.setShowPayment(true);
                  }}
                ></input>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Additional;
