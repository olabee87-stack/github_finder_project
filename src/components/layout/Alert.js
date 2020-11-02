import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

//@{alert} - object with the message and type on App.js
//Note - the original msg and type has been efined in Search.js and also passed on to App.js
const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
