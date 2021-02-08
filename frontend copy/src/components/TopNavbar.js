import React from "react";
import "./TopNavbar.css";
import { Nav, NavLink } from "reactstrap";

// , NavItem

export const TopNavbar = (props) => {
  return (
    <div>
      {/* <p>List Based</p>
      <Nav>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
      <p>Link Based</p> */}
      <Nav className='topNavbar' >
        <NavLink className='topNav-links' href="#">Link</NavLink> 
        <NavLink className='topNav-links' href="#">Link</NavLink>{" "}
        <NavLink className='topNav-links' href="#">Another Link</NavLink>{" "}
        {/* <NavLink disabled href="#">
          Disabled Link
        </NavLink> */}
      </Nav>
    </div>
  );
};

// export default Navbar1;
