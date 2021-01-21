import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./Home.scss";

export class Home extends Component {
  render() {
    return (
      <div className="homeSection">
        <div className="homeSection_dotsLeft"></div>
        <div className="homeSection_dotsRight"></div>
        <div className="bgGrafic"></div>
        {/* <Container className="container">
          <Row>
            <Col>12345678</Col>
          </Row>
        </Container> */}
        <div className="booking"></div>
      </div>
    );
  }
}

export default Home;
