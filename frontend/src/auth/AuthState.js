import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { useHistory } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null,
    token: null,
  };
  const history = useHistory();

  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = async (formData) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://localhost:4000/user/register",
        formData,
        config
      );
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data,
      });
      console.log("data=", res.data);
    } catch (error) {
      dispatch({
        type: "REGISTER_FAIL",
        payload: error.response.data.message,
      });
    }
  };
  const loadUser = async () => {
    try {
      const res = await axios.get("http://localhost:4000/booking/dashboard", {
        withCredentials: true,
      });
      console.log(res);
      return res;
    } catch (error) {
      dispatch({
        type: "USER_LOADED_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  const login = async (formData) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
      crossdomain: true,
    };
    try {
      console.log(formData);
      const res = await axios.post(
        "http://localhost:4000/user/login",
        formData,
        config
      );
      console.log(res);
      console.log(res.status);
      if (!res) {
        throw Error("server error!!!!!");
      }
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
      //loadUser();
      console.log(res.data.success);
      history.push("/dashboard/");
    } catch (error) {
      /*  console.log(error);

      console.log(error.response.data.message);
      dispatch({
        type: "LOGIN_FAIL",
        payload: error.response.data.message,
      }); */
    }
  };
  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        login,
        loadUser,
        clearError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
