import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Logo from "./Logo/NavbarLogo.svg";

export const TopNav = styled.nav`
  background: #000;
  height: 40px;
  margin-top:0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const TopNavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  z-index: 1;
  width: 100%;
  padding: 0 5%;
  max-width: 1100px;
  text-decoration: none;
  list-style: none;
`;

export const TopNavItem = styled.li`
  display: flex-start;
  justify-content: right;
  margin: 16px 16px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #ffde4c;
    background-color: #ffffff20;
  }
`;

export const Nav = styled.nav`
  background: -prefix-linear-gradient(top, black, grey 100%, white);

  background: linear-gradient(to bottom, black, #424242 70%, black);
  height: 80px;
  margin-top:0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.img`
  color: #fff;
  position: relative;
  top: -10px;
  left: -1%;
  right: 10%;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  padding: 0 18px;
  width: 150px;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

NavLogo.defaultProps = {
  src: Logo,
};

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 21%;
    right: 4%;
    transform: translate(-100%, 60%);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

    &:hover {
      color: #ffde4c;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 5%;

  @media screen and(max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  padding: 0 10px;
  margin: 0 1% 0 1%;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.6rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }

  &:hover {
    color: #ffde4c;
  }
`;

export const NavBtnIN = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px 24px;
`;

export const NavBtnLinkINUP = styled(LinkRouter)`
  color: #ffde4c;
  border-radius: 50px;
  background: linear-gradient(to bottom, #ffe79e 13%, #897129 38%, #504630 98%);
  white-space: nowrap;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  padding: 0 8px;
  margin-right: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffffff;
    color: #000000;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


