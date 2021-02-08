import React from "react";
import {
  TopNav,
  TopNavbarContainer,
  TopNavItem,

} from "./NavbarElements";

function TopNavbar() {

    return (
      <>
        <TopNav>
          <TopNavbarContainer>
            <TopNavItem>
               Corona
            </TopNavItem>
            <TopNavItem>
               Contact
            </TopNavItem>
            <TopNavItem>
               FAQ
            </TopNavItem>
          </TopNavbarContainer>
        </TopNav>
      </>
    );
}
export default TopNavbar;
