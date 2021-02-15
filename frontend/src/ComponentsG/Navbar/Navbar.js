import React from "react";
import { BsFillBarChartFill } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosPricetags } from "react-icons/io";
import { TiInfoLargeOutline } from "react-icons/ti";
// import { GiSoccerField } from "react-icons/gi";
import { animateScroll as scroll } from "react-scroll";
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
} from "./NavbarElements";

function Navbar({ toggle }) {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}></NavLogo>

          <MobileIcon onClick={toggle}>
            <BsFillBarChartFill style={{}} />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                style={{
                  position: "relative",
                  right: "5px",
                  textDecoration: "none",
                }}
              >
                <HiOutlineHome
                  style={{
                    position: "relative",
                    top: "-1px",
                    right: "5px",
                    textDecoration: "none",
                  }}
                />{" "}
                K2G
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="price"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                style={{
                  position: "relative",
                  right: "5px",
                  textDecoration: "none",
                }}
              >
                <IoIosPricetags
                  style={{
                    position: "relative",
                    top: "-1px",
                    right: "5px",
                    textDecoration: "none",
                  }}
                />{" "}
                Price
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="info"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                style={{
                  position: "relative",
                  right: "12px",
                  textDecoration: "none",
                }}
              >
                <TiInfoLargeOutline
                  style={{
                    position: "relative",
                    top: "-1px",
                    right: "1px",
                    textDecoration: "none",
                  }}
                />{" "}
                Info
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to="fields"
                style={{ position: "relative", right: "5px" }}
              >
                <GiSoccerField
                  size={30}
                  style={{ position: "relative", top: "-1px", right: "5px" }}
                />{" "}
                Fields
              </NavLinks>
            </NavItem> */}

            <NavBtnLinkINUP>
              <NavBtnIN style={{ textDecoration: "none" }} to="/registration">
                Sign In | Up
              </NavBtnIN>
            </NavBtnLinkINUP>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
