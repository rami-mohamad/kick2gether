import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../auth/authContext";
import AlertContext from "../alert/alertContext";
import "./SignIn.scss";
function SignIn() {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { login, error, isAuthenticated, clearError } = authContext;
  const { addAlert } = alertContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const history = useHistory();
  useEffect(() => {
    if (error) {
      addAlert(error);
      clearError();
    }
    if (isAuthenticated) {
      //history.push("/Home");
    }
  }, [error, isAuthenticated]);
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("login user");
    if (email === "" || password === "") {
      addAlert("please fill the fields", "danger");
    } else {
      const user = await login({ email, password });
      if (user) {
        history.push("/dashboard/");
      }
    }
  };
  return (
    <div className="signInForm">
      <form onSubmit={onSubmit}>
        <div className="signIn-H">
          <h1>SIGN IN</h1>
        </div>
        {/* NotificationComponent */}
        <input
          type="email"
          placeholder="User Email"
          name="email"
          onChange={onChange}
          className="inputEmail"
        ></input>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
            className="inputPassword"
          ></input>
        </div>
        <div>
          <input type="submit" value="SignIn" className="inputSignIn" />
        </div>
        <div className="resetPassword">
          <a href="localhost:3000/reset">Forget your Password?</a>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
