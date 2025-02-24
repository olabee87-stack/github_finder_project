import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //@Set Alert handler - @msg, @type - params from Search.js
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000); //set alert to null after 5s
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state, //the current state
        setAlert, //the set method
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
