import React, { useContext, useState, useEffect } from "react";
import AlertContext from "../alert/alertContext";
import AuthContext from "../auth/authContext";
import "./SignUp.scss";
function SignUp() {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { register } = authContext;
  const { addAlert } = alertContext;
  const [user, setUser] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
  });
  const { name, nickName, email, password } = user;

  // create state for notification

  // inside notification component

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      console.log("there is something missing!!!");
      addAlert("there is something missing!!!");

      // set the notification state
      // setTimeout to remove that notification state
    } else {
      console.log("register user");
      register({ name, nickName, email, password });
    }
  };
  return (
    <div className="signUpForm">
      {/* <div className="form"> */}

      <form onSubmit={onSubmit}>
        <div className="signUp-H">
          <h1>SIGN UP</h1>
        </div>
        {/* NotificationComponent error={} */}
        <div>
          <input
            type="text"
            placeholder="User Name"
            name="name"
            onChange={onChange}
            className="inputUser"
          />
        </div>

        <div>
          <input
            type="Nick Name"
            name="nickName"
            placeholder="Nick name"
            onChange={onChange}
            className="inputNickname"
          ></input>
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            // value={email}
            onChange={onChange}
            className="inputEmail"
          ></input>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
            className="inputPassword"
          ></input>
        </div>

        <div className="checkBox">
          <input
            type="checkbox"
            required={true}
            className="checkBox_size"
          ></input>
          <label> I agree the K2G Terms</label>
        </div>
        <div>
          <input type="submit" value="Sign Up" className="inputRegister" />
        </div>
      </form>
      {/* </div> */}
    </div>
  );
}

export default SignUp;
