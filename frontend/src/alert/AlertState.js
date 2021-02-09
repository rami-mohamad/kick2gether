import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { v4 } from "uuid";

const AlertState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const addAlert = (message, type) => {
    const id = v4();
    dispatch({
      type: "ADD_ALERT",
      payload: { message, type, id },
    });
    setTimeout(() => dispatch({ type: "REMOVE_ALERT", payload: id }), 2000);
  };
  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        addAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
