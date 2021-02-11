import React from "react";
import Icon from "./PriceImages/Icon.png";
import { useHistory } from "react-router-dom";

import {
  PriceContainer,
  HeaderPart,
  PriceH1,
  PriceH2,
  PriceH3,
  PriceWrapper,
  PriceCard,
  PriceIcon,
  PriceCardH2,
  // PriceUl,
  PriceCardLi1,
  PriceCardLi2,
  PriceCardLi3,
  PriceCardLi4,
  PriceCardLi5,
  PriceInfoH3,
  PriceCardInfoH2,
  BtnWrap,
  Button,
  img,
} from "./PriceElements";

const Price = () => {

  const history = useHistory();

  return (
    <PriceContainer id="price">
      <HeaderPart>
        <PriceH1> Price </PriceH1>
        <PriceH2>Our promise: 100% fair prices!</PriceH2>
        <PriceH3>
          Regardless of whether it is a single booking or a subscription - you
          benefit from low prices 365 days a year.
        </PriceH3>
      </HeaderPart>

      <PriceWrapper>
        <PriceCard>
          <PriceIcon> 👤 Individual</PriceIcon>
          <PriceCardH2>Whole Field 50€/ Person</PriceCardH2>
          {/* <PriceUl> */}
          <PriceCardLi1>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>
            Components-driven system
          </PriceCardLi1>
          <PriceCardLi2>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>{" "}
            Components-driven system
          </PriceCardLi2>
          <PriceCardLi3>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>{" "}
            Components-driven system
          </PriceCardLi3>
          <PriceCardLi4>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>{" "}
            Components-driven system
          </PriceCardLi4>
          {/* </PriceUl> */}

          <BtnWrap>
            <Button
              style={{ textDecoration: "none" }}
              onClick={() => {
                history.push("/registration/");
              }}
            >
              SIGN IN or UP{" "}
            </Button>
          </BtnWrap>
        </PriceCard>

        <PriceCard>
          <PriceIcon>👥 Corporate</PriceIcon>
          <PriceCardH2>Full Group 5€/ Person</PriceCardH2>
          <PriceCardLi1>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>
            Awesome Feather icons pack
          </PriceCardLi1>
          <PriceCardLi2>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>{" "}
            Awesome Feather icons pack
          </PriceCardLi2>
          <PriceCardLi3>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>{" "}
            Awesome Feather icons pack
          </PriceCardLi3>
          <PriceCardLi4>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>{" "}
            Awesome Feather icons pack
          </PriceCardLi4>

          <BtnWrap>
            <Button
              style={{ textDecoration: "none" }}
              onClick={() => {
                history.push("/registration/");
              }}
            >
              SIGN IN or UP{" "}
            </Button>
          </BtnWrap>
        </PriceCard>

        <PriceCard>
          <PriceInfoH3> How it works </PriceInfoH3>
          <PriceCardInfoH2>Information</PriceCardInfoH2>
          <PriceCardLi1>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>{" "}
            why it's better
          </PriceCardLi1>
          <PriceCardLi2>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>{" "}
            why it's better
          </PriceCardLi2>
          <PriceCardLi3>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>{" "}
            why it's better
          </PriceCardLi3>
          <PriceCardLi4>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>{" "}
            why it's better
          </PriceCardLi4>
          <PriceCardLi5>
            {" "}
            <img
              key={img}
              alt={Icon}
              src={Icon}
              style={{
                position: "relative",
                right: "4px",
                top: "4px",
                width: "20px",
              }}
            ></img>{" "}
            why it's better
          </PriceCardLi5>
        </PriceCard>
      </PriceWrapper>
    </PriceContainer>
  );
};

export default Price;
