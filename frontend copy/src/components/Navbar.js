import React, { useState } from 'react'
import { TopNavbar } from './TopNavbar'
import { Button } from './Buttons'
// import { Button2 } from "./Buttons";
import { Link } from 'react-router-dom'
import Logo from './Logo/NavbarLogo.svg'
import './Navbar.css'
import Dropdown from './Dropdown'

//Comments
function Navbar(){
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false); 

    const onMouseEnter = () =>{
        if (window.innerWidth < 960){
            setDropdown(false);
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
        setDropdown(false);
        } else {
        setDropdown(false);
        }
    };

    return (
      <>
        <TopNavbar />

        <nav className="navbar">
          <Link to="/" className="navbar-logo">
            <img src={Logo} height="70" width="120" alt="K2G Logo" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                K2G
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="/price" className="nav-links" onClick={closeMobileMenu}>
                Price <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <Link to="/info" className="nav-links" onClick={closeMobileMenu}>
                Info
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/fields"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Fields
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign-In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign-Up
              </Link>
            </li>
            <Button class="btn1" to="sign-in" label="Sign In" />
            <Button class="btn2" to="sign-up" label="Sign Up" />
          </ul>

          {/* <Button2 /> */}
        </nav>
      </>
    );
}

export default Navbar;