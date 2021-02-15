import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) =>
    primary
      ? "linear-gradient(to bottom, #ffe79e 13%, #897129 38%, #504630 98%);"
      : "#010606"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "18px 52px" : "16px 30px")};
  color: ${({ dark }) => (dark ? "#ffde4c" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "18px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  position: relative;
  top: 200px;

  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: ${({ primary }) => (primary ? "#fff" : "#010BF71")};
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
    padding: ${({ big }) => (big ? "18px 52px" : "16px 30px")};
  }

  @media screen and (max-width: 768px) {
    position: relative;
    top: 65px;
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "18px")};
    padding: ${({ big }) => (big ? "18px 52px" : "12px 30px")};

    &:hover {
      padding: ${({ big }) => (big ? "18px 52px" : "12px 30px")};
    }
  }

  @media screen and (max-width: 480px) {
    position: relative;
    top: 130px;
  }
`;
