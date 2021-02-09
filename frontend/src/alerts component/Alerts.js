import React, { useContext } from "react";
import AlertContext from "../alert/alertContext";
import "./Alerts.scss";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  console.log(alertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className="alerts">
        <i />
        {alert.message}
      </div>
    ))
  );
};

export default Alerts;
