import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registration from "./registration/registration";
import AuthState from "../src/auth/AuthState";
import AlertState from "./alert/AlertState";
import Alerts from "./alerts component/Alerts";
import Home from "./Home/Home";

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <BrowserRouter>
          <Fragment>
            <div>
              <Alerts className="alerts" />
              <Switch>
                <Route
                  path="/registration"
                  exact
                  component={registration}
                ></Route>
                <Route path="/Home" component={Home} exact />
              </Switch>
            </div>
          </Fragment>
        </BrowserRouter>
      </AlertState>
    </AuthState>
  );
};

export default App;
