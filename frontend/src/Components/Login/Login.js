import React from "react";
import "./Login.scss";
import { Container, Row, Col } from "reactstrap";

function Login() {
  return (
    <div>
      <div className="login">
        <div className="left_side">
          <div className="left_side_wrapper">
            <div className="left_side_form_wrapper">
              <form className="login_form">
                <h3 className="left_side_form_heading">Sign In</h3>
                <input
                  className="left_side_username"
                  type="text"
                  placeholder="username"
                ></input>
                <input
                  className="left_side_username left_side_password"
                  type="password"
                  placeholder="password"
                ></input>
                <input
                  type="submit"
                  className="left_side_button"
                  value="SIGN IN"
                ></input>
                <div className="left_side_text_only">Forgot your password?</div>
                <div className="left_side_text_only">------ or ------</div>
                <button className="left_side_button" value="Sign In">
                  SIGN UP
                </button>
                <div className="google">
                  <div className="google_icon"></div>
                  <div className="google_text">SIGN IN WITH GOOGLE</div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="right_side"></div>
      </div>
    </div>
  );
}

export default Login;
