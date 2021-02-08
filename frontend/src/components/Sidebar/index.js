import React from 'react';
import { HiOutlineHome } from "react-icons/hi";
import { IoIosPricetags } from "react-icons/io";
import { TiInfoLargeOutline } from "react-icons/ti";
// import { GiSoccerField } from "react-icons/gi";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>

        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="home" onClick={toggle} >
              <HiOutlineHome
                style={{ position: "relative", top: "-1px", right: "5px" }}
              />
              K2G
            </SidebarLink>
            <SidebarLink to="price" onClick={toggle}>
              <IoIosPricetags
                style={{ position: "relative", top: "-1px", right: "5px" }}
              />
              Price
            </SidebarLink>
            <SidebarLink to="info" onClick={toggle}>
              <TiInfoLargeOutline
                style={{ position: "relative", top: "-1px", right: "1px" }}
              />
              Info
            </SidebarLink>
            {/* <SidebarLink to="fields" onClick={toggle}>
              <GiSoccerField
                size={30}
                style={{ position: "relative", top: "-1px", right: "5px" }}
              />
              Fields
            </SidebarLink> */}
          </SidebarMenu>

          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In | Up</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default Sidebar

