import React from "react";
import "./BookingConfirmation.scss";
import { Container, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

function BookingConfirmation(props) {
  const history = useHistory();
  setTimeout(() => {
    history.push("/dashboard");
  }, 3000);
  return (
    <div style={{ backgroundColor: "rgb(224 223 223)" }}>
      <Container>
        <Row>
          <Col>
            <h4 className="confirmation_heading">Thanks for your booking !</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="confirmation_circle"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="confirmation_text">
              You will receive a confirmation email in a few minutes at the
              following address:
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="confirmation_text ">
              <span>{`${props.email}`}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BookingConfirmation;
