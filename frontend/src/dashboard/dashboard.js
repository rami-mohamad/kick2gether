import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../auth/authContext";
import "./Dashboard.scss";

function Dashboard() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;
  const user = loadUser();
  return (
    <div>
      <h1></h1>
    </div>
  );
}
export default Dashboard;
