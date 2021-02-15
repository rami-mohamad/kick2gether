import React from "react";
import { BsFillBarChartFill } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosPricetags } from "react-icons/io";
import { TiInfoLargeOutline } from "react-icons/ti";
import { useHistory } from "react-router-dom";
import "./NavbarHistory.scss";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLinkINUP,
  NavBtnIN,
  NavLogo,
} from "../../ComponentsG/Navbar/NavbarElements";

import { animateScroll as scroll } from "react-scroll";

function NavbarHistory() {
  const history = useHistory();
  const toggleHome = () => {
    history.push("/");
  };
  return (
    <div>
      <>
        <Nav>
          <NavbarContainer style={{ height: "50px" }}>
            <NavLogo to="/" onClick={toggleHome}></NavLogo>

            <NavBtnLinkINUP style={{ display: "block" }}>
              <NavBtnIN
                style={{ textDecoration: "none", display: "block" }}
                to="/registration"
              >
                Sign In | Up
              </NavBtnIN>
            </NavBtnLinkINUP>
          </NavbarContainer>
        </Nav>
      </>
    </div>
  );
}

export default NavbarHistory;
