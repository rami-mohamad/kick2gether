import React from "react";
import { BsFillBarChartFill } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosPricetags } from "react-icons/io";
import { TiInfoLargeOutline } from "react-icons/ti";
// import { GiSoccerField } from "react-icons/gi";
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

function Navbar({toggle}) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"></NavLogo>

          <MobileIcon onClick={toggle}>
            <BsFillBarChartFill style={{}} />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                style={{ position: "relative", right: "5px" }}
              >
                <HiOutlineHome
                  style={{ position: "relative", top: "-1px", right: "5px" }}
                />{" "}
                K2G
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="price"
                style={{ position: "relative", right: "5px" }}
              >
                <IoIosPricetags
                  style={{ position: "relative", top: "-1px", right: "5px" }}
                />{" "}
                Price
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="info"
                style={{ position: "relative", right: "12px" }}
              >
                <TiInfoLargeOutline
                  style={{ position: "relative", top: "-1px", right: "1px" }}
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
              <NavBtnIN >Sign In | Up</NavBtnIN>
            </NavBtnLinkINUP>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
