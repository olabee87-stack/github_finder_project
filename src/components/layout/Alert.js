import React from "react";

//@{alert} - object with the message and type on App.js
//Note - the original msg and type has been efined in Search.js and also passed on to App.js
const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
