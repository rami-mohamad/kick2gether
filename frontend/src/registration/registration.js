import React from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./registration.scss";

function registration() {
  return (
    <div className="main">
      <div className="Header"></div>
      <div className="background">
        <div className="RightDiv"></div>
        <SignUp />
        <div className="SocialDiv">
          <div className="socialMedia"></div>
        </div>
        <div className="Logo"></div>
        <div className="LeftDiv">
          <div className="KontaktDiv">
            <div className="mobile"></div>
            <div className="p-mobile">
              <p>+49-17000000000</p>
            </div>
            <div className="mail"></div>
            <div className="p-mail">
              <p>kik2gether.outlook.de</p>
            </div>
          </div>
        </div>
        <SignIn />
      </div>
    </div>
  );
}

export default registration;
