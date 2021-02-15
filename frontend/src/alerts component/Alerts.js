import React, { useContext } from "react";
import AlertContext from "../alert/alertContext";
import { Alert } from "reactstrap";
import "./Alerts.scss";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  console.log(alertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id}>
        <Alert color="danger" className="alerts">
          <i />
          {alert.message}
        </Alert>
      </div>
    ))
  );
};

export default Alerts;
